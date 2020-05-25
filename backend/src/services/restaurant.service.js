const uuid = require("uuid").v4;

const { to } = require("../utils/utils");
const {
    queryGetRestaurants,
    queryAddRestaurant,
    queryDeleteRestaurant,
    queryEditRestaurant,
    queryGetRestaurant
} = require("../repositories/restaurant.repository");

const addRestaurant = async (query, restaurant) => {
    const id = uuid();
    const [err, success] = await to(
        queryAddRestaurant(query, { ...restaurant, id })
    );

    return [err, success];
};

const getRestaurants = async query => {
    const [err, restaurants] = await to(queryGetRestaurants(query));

    return [err, restaurants];
};

const getRestaurant = async (query, id) => {
    const [err, result] = await to(queryGetRestaurant(query, id));

    var restaurant = null;
    if (result.length > 0) {
        restaurant = result[0];
    }

    return [err, restaurant];
};

const editRestaurant = async (query, id, data) => {
    const [err, success] = await to(queryEditRestaurant(query, id, data));

    return [err, success];
};

const deleteRestaurant = async (query, id) => {
    const [err, success] = await to(queryDeleteRestaurant(query, id));

    return [err, success];
};

module.exports = {
    getRestaurants,
    addRestaurant,
    getRestaurant,
    editRestaurant,
    deleteRestaurant
};
