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
const PIZZA = "pizza";
const SUSHI = "sushi";
const THAI = "thai";
const HAMBURGER = "hamburger";
const BAGUETTES = "baguettes";
const OTHER = "other";
const LUNCH = "lunch";

/* Settings */
const PORT = 8080;
const REDIS_PORT = 6379;
const REDIS_EXPIRE = 100000; //You can make 1000 requests per day to Google.
const GOOGLE_PLACE_BASE_URL =
    "https://maps.googleapis.com/maps/api/place/details/json";
const GOOGLE_PLACE_API_KEY = process.env.GOOGLE_PLACE_API_KEY;
const RESTAURANTS = {
    //Pizza
    ChIJddwD2grzT0YRmU8ZuSUJgCE: {
        //Pizzeria Gibraltar
        name: "Pizzeria Gibraltar",
        category: PIZZA,
        link_to_menu: "http://pizzeriagibraltar.com"
    },
    ChIJ_wboygrzT0YRtYnZgbt_F2Q: {
        //Pizzeria Peperoni
        name: "Pizzeria Peperoni",
        category: PIZZA,
        link_to_menu: "http://pizzeriapeperoni.se/Meny.html"
    },
    "ChIJNwdwjgrzT0YRp-PNd9EuGDs": {
        //Sannegården Pizzeria Johanneberg
        name: "Sannegårdens Pizzeria",
        category: PIZZA,
        link_to_menu: "https://sannes.chalmers.it"
    },
    "ChIJCZlNBafzT0YR8A-Fnfa6zTo": {
        //Mossens Pizzeria
        name: "Mossens Pizzeria",
        category: PIZZA,
        link_to_menu: "http://mossenspizzeria.se"
    },
    ChIJabzIUKbzT0YRIgFOYpKMWWI: {
        //Pig 'N' Whistle / Ät & Njut
        name: "Ät & Njut",
        category: PIZZA,
        link_to_menu: "http://atonjut.se/meny/"
    },

    //Thai
    ChIJX5vM33TzT0YRCyx2D_K0hWg: {
        //Arojj Dii
        name: "Arojj Dii",
        category: THAI,
        link_to_menu:
            "http://ijohanneberg.se/platser/goteborg/johanneberg/restauranger/arojj-dii/"
    },
    ChIJW1EE8aDzT0YRQ6EPi_Ameb0: {
        //Baan Thai
        name: "Baan Thai",
        category: THAI,
        link_to_menu: "http://www.baanthaigbg.se/meny/"
    },

    //Hamburger
    ChIJQciMX6DzT0YRjjsg75Gzce0: {
        //Luma Grill
        name: "Luma Grill",
        category: HAMBURGER,
        link_to_menu: "https://www.lumagrill.nu/menyer"
    },
    ChIJLxoVhQzzT0YRC7c0h4_v16c: {
        //J.A. Pripps
        name: "J.A. Pripps",
        category: HAMBURGER,
        link_to_menu:
            "https://chalmerskonferens.se/restauranger/johanneberg/j-a-pripps-pub-cafe/"
    },

    //Sushi
    ChIJvR0a6wrzT0YRp9vJhNRoFOw: {
        //Sushi Me
        name: "Sushi Me",
        category: SUSHI,
        link_to_menu: "/menu/sushime"
    },
    ChIJGyWihwrzT0YRGwm7RKYNGac: {
        //Yoko Sushi
        name: "Yoko Sushi",
        category: SUSHI,
        link_to_menu: "http://www.yokosushi.se/lunch.html"
    },
    ChIJUwvxT3LzT0YRX9eCb9iukZ0: {
        //Sushi Lau
        name: "Sushi Lau",
        category: SUSHI,
        link_to_menu: "/menu/sushilau"
    },
    ChIJ2Z4wbFnzT0YRPer3l2XAeJU: {
        // Johanneberg Sushi
        name: "Johanneberg Sushi",
        category: SUSHI,
        link_to_menu: "http://johannebergsushi.se/meny"
    },

    //BAGUETTES
    ChIJYzHHXQrzT0YRTP8fM6oIgHU: {
        //Alpa baguetteria
        name: "Alpa Baugetteria",
        category: BAGUETTES,
        link_to_menu: "http://www.alpabaguetter.se"
    },
    ChIJM0bil3TzT0YRltK1jge1AC4: {
        //Baguetteria No 1
        name: "Baguetteria No 1",
        category: BAGUETTES,
        link_to_menu: "http://baguetteria.se/baguetter.html"
    },
    ChIJ3R_ruHTzT0YRLt0Zk_WanoA: {
        //Gunillas Baguetter
        name: "Gunillas Baguetter",
        category: BAGUETTES,
        link_to_menu:
            "http://ijohanneberg.se/platser/goteborg/johanneberg/mat-utestallen/gunillas-baguetter/"
    },

    //Lunch
    ChIJF9E4gAnzT0YRHKPZ7NI0JSg: {
        //Catering Göteborg (Einstein)
        name: "Einstein",
        category: LUNCH,
        link_to_menu: "http://restaurang-einstein.se/#section_rmaslhqt3"
    },

    ChIJH10IAQvzT0YRRSfukcb9Idw: {
        name: "Linsen",
        category: LUNCH,
        link_to_menu: "http://www.cafelinsen.se/lunch-meny.php"
    },

    "ChIJj0qphgzzT0YRZ7YZA-1jaj8": {
        name: "Kårrestaurangen",
        category: LUNCH,
        link_to_menu:
            "http://carbonatescreen.azurewebsites.net/menu/week/karrestaurangen/21f31565-5c2b-4b47-d2a1-08d558129279"
    },

    ChIJl0Tpa3PzT0YROiSg5YkEglc: {
        name: "Wijkanders",
        category: LUNCH,
        link_to_menu: "https://wijkanders.se/restaurangen/"
    },

    //Other
    ChIJrwu7iArzT0YRvNk45bt4zqQ: {
        //Miss Fajitas
        name: "Miss Fajitas",
        category: OTHER,
        link_to_menu: "http://missfajitas.se/meny/"
    },
    "ChIJTU-RkynzT0YRowXD5xZ_etg": {
        //Gandhi Mahal
        name: "Gandhi Mahal",
        category: OTHER,
        link_to_menu: "http://www.gandhimahal.se/lesson/a-la-carte-meny/"
    }
};

/* Modules */
const app = express();
const server = http.createServer(app);
const redisClient = redis.createClient("redis://redis:" + REDIS_PORT);

/* Start Server */
server.listen(PORT);

app.get("/api/mat.json", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");

    redisClient.exists("mat", (err, exists) => {
        if (exists === 1) {
            console.log(
                "[MAT]{" + getCurrentTime() + "} Loading from redis..."
            );
            redisClient.get("mat", (err, reply) => {
                res.send(Object.values(JSON.parse(reply)));
            });
        } else {
            console.log("[MAT]{" + getCurrentTime() + "} Saving...");
            generateMatData().then((response) => {
                redisClient.set("mat", JSON.stringify(response));
                redisClient.expire("mat", REDIS_EXPIRE);
                res.send(response);
            }).catch(error => {
                console.log(error);

            });
        }
    });
});

function generateMatData() {
    return new Promise(function(resolve, reject) {
        var restaurantPromises = [];
        for (var placeId in RESTAURANTS) {
            restaurantPromises.push(getGooglePlacePromise(placeId));
        }
        Promise.all(restaurantPromises).then(function(response) {
            var data = [];
            response.forEach(responseElement => {
                const restaurantData = getRestaurantData(responseElement.data.result);
                data.push(restaurantData);
            });

            resolve(data);
        }).catch(error => {
            console.log(error);
        });
    });
}

function getRestaurantData(googleData) {
    if (googleData == null) {
        return {};
    }

    var restaurantData = {};

    //Transfer from Google to restaurantData
    transferData(
        [
            "place_id",
            "formatted_phone_number",
            "formatted_address",
            "opening_hours"
        ],
        googleData,
        restaurantData
    );

    //Transfer from RESTAURANTS to restarurantObject

    transferData(
        ["name", "category", "link_to_menu"],
        RESTAURANTS[googleData.place_id],
        restaurantData
    );

    return restaurantData;
}

function getGooglePlacePromise(placeId) {
    return axios.get(
        GOOGLE_PLACE_BASE_URL +
        "?placeid=" +
        placeId +
        "&key=" +
        GOOGLE_PLACE_API_KEY +
        "&language=sv"
    );
}

function transferData(keysToTransfer, src, dest) {
    if (src != null) {
        keysToTransfer.forEach(key => {
            dest[key] = src[key];
        });
    }
}

function getCurrentTime() {
    var currentdate = new Date();
    return (
        currentdate.getFullYear() +
        "-" +
        (currentdate.getMonth() + 1) +
        "-" +
        currentdate.getDate() +
        " @ " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds()
    );
}

/*
 * index
 *  - name (Mat)
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
