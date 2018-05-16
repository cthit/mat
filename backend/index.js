/* External Requirements */
const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const redis = require("redis");
const axios = require("axios");
const flatten = require("flat");
const unflatten = require("flat").unflatten;

/* Constants */
const PIZZA = 'pizza';
const SUSHI = 'sushi';
const THAI = 'thai';
const HAMBURGER = 'hamburger';
const OTHER = 'other';

/* Settings */
const PORT = 8080;
const REDIS_PORT = 6379;
const REDIS_EXPIRE = 1310; //You can make 1000 requests per day to Google. 
const GOOGLE_PLACE_BASE_URL = 'https://maps.googleapis.com/maps/api/place/details/json';
const GOOGLE_PLACE_API_KEY = 'GOOGLE_PLACE_API_KEY_HERE';
const RESTAURANTS = {

    //Pizza
    'ChIJddwD2grzT0YRmU8ZuSUJgCE': { //Pizzeria Gibraltar
        'category': PIZZA,
        'link_to_menu': 'http://pizzeriagibraltar.com'
    },
    'ChIJ_wboygrzT0YRtYnZgbt_F2Q': { //Pizzeria Peperoni
        'category': PIZZA,
        'link_to_menu': 'http://pizzeriapeperoni.se/Meny.html'
    },
    'ChIJV5iOjgrzT0YRgLrXj2ExUto': { //Sannegården Pizzeria Johanneberg
        'category': PIZZA,
        'link_to_menu': 'https://sannes.chalmers.it'
    },
    'ChIJCZlNBafzT0YR8A-Fnfa6zTo': { //Mossens Pizzeria
        'category': PIZZA,
        'link_to_menu': 'http://mossenspizzeria.se'
    },

    
    // ---------------------------------------------------------
    //Thai
    'ChIJX5vM33TzT0YRCyx2D_K0hWg': { //Arojj Dii
        'category': THAI,
        'link_to_menu': 'http://ijohanneberg.se/platser/goteborg/johanneberg/restauranger/arojj-dii/'
    },
    'ChIJW1EE8aDzT0YRQ6EPi_Ameb0': { //Baan Thai
        'category': THAI,
        'link_to_menu': 'http://www.baanthaigbg.se/meny/'
    },

    
    // ---------------------------------------------------------
    //Hamburger
    'ChIJQciMX6DzT0YRjjsg75Gzce0': { //Luma Grill
        'category': HAMBURGER,
        'link_to_menu': 'https://www.lumagrill.nu/menyer'
    },
    'ChIJLxoVhQzzT0YRC7c0h4_v16c': { //J.A. Pripps
        'category': HAMBURGER,
        'link_to_menu': 'https://chalmerskonferens.se/restauranger/johanneberg/j-a-pripps-pub-cafe/'
    },
    'ChIJabzIUKbzT0YRIgFOYpKMWWI': { //Pig 'N' Whistle
        'category': HAMBURGER,
        'link_to_menu': 'http://pignwhistle.se/menu/'
    },
    
    
    // ---------------------------------------------------------
    //Sushi
    'ChIJvR0a6wrzT0YRp9vJhNRoFOw': { //Sushi Me
        'category': SUSHI,
        'link_to_menu': '/res/sushi_me.jpg'
     },
    'ChIJGyWihwrzT0YRGwm7RKYNGac': { //Yoko Sushi
        'category': SUSHI,
        'link_to_menu': 'http://www.yokosushi.se/lunch.html'
    },
    'ChIJUwvxT3LzT0YRX9eCb9iukZ0': { //Sushi Lau
        'category': SUSHI,
        'link_to_menu': '/res/sushi_lau.png'
    },

    //Other
    'ChIJYzHHXQrzT0YRTP8fM6oIgHU': { //Alpa baguetteria
        'category': OTHER,
        'link_to_menu': 'http://www.alpabaguetter.se'
    },
    'ChIJrwu7iArzT0YRvNk45bt4zqQ': { //Miss Fajitas
        'category': OTHER,
        'link_to_menu': 'http://missfajitas.se/meny/'
    },
    'ChIJF9E4gAnzT0YRHKPZ7NI0JSg': { //Catering Göteborg (Einstein)
        'category': OTHER,
        'link_to_menu': 'http://www.butlercatering.se/einstein'
    }
};

/* Modules */
const app = express();
const server = http.createServer(app);
const redisClient = redis.createClient('redis://redis:' + REDIS_PORT);

/* Start Server */
server.listen(PORT);

app.get('/api/mat.json', function(req, res){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET');

    redisClient.exists('mat', function(err, exists){
        if(exists == 1){
            console.log("Loading from redis...");
            redisClient.hgetall('mat', function(err, reply){
                res.send(unflatten(reply));
            });
        }else{
            console.log("Saving...");
            generateMatData()
                .then(function(response){
                    redisClient.hmset('mat', flatten(response));
                    redisClient.expire('mat', REDIS_EXPIRE);
                    res.send(response);
                });
        }
    });
});

function generateMatData(){
    return new Promise(function(resolve, reject){
        var restaurantPromises = [];
        for(var placeId in RESTAURANTS){
            restaurantPromises.push(getGooglePlacePromise(placeId));
        }
        Promise.all(restaurantPromises)
            .then(function(response){
                var data = [];
                response.forEach(responseElement => {
                    data.push(getRestaurantData(responseElement.data.result));
                });

                resolve(data);
            });
    }); 
}

function getRestaurantData(googleData){
    var restaurantData = {};

    //Transfer from Google to restaurantData
    transferData([
        'name', 'rating', 'formatted_phone_number',
        'formatted_address', 'opening_hours'
    ], googleData, restaurantData);

    //Transfer from RESTAURANTS to restarurantObject
    transferData([
        'category', 'link_to_menu'
    ], RESTAURANTS[googleData.place_id], restaurantData);

    return restaurantData;
}

function getGooglePlacePromise(placeId){
    return axios.get(
        GOOGLE_PLACE_BASE_URL + 
            '?placeid=' + placeId + 
            "&key=" + GOOGLE_PLACE_API_KEY + 
            "&language=sv");
}

function transferData(keysToTransfer, src, dest){
    keysToTransfer.forEach(key => {
        dest[key] = src[key];
    });
}

/*
 * index
 *  - name (Google)
 *  - link_to_menu (Mat)
 *  - category (Mat)
 *  - ratings (Google)
 *  - website (Google)
 *  - formatted_phone_number (Google)
 *  - formatted_address (Google)
 *  - opening_hours (Google)
 *      - periods[]
 *          - open
 *              - day
 *              - time
 *          - closed
 *   
 */