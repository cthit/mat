const { getRestaurant } = require("../services/restaurant.service");
const {
    addRestaurant,
    getRestaurants,
    deleteRestaurant,
    editRestaurant
} = require("../services/restaurant.service");

const handleAddRestaurant = query => async (req, res) => {
    const [err] = await addRestaurant(query, req.body);

    if (err) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }

    if (err != null) {
        console.log(err);
    }
};

const handleEditRestaurant = query => async (req, res) => {
    const { id } = req.params;

    const [err, success] = await editRestaurant(query, id, req.body);

    if (!success) {
        res.status(404).send("restaurant doesn't exist");
    } else if (err) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }

    if (err != null) {
        console.log(err);
    }
};

const handleDeleteRestaurant = query => async (req, res) => {
    const { id } = req.params;

    const [err, success] = await deleteRestaurant(query, id);

    if (!success) {
        res.status(404).send("category doesn't exist");
    } else if (err) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }

    if (err != null) {
        console.log(err);
    }
};

const handleGetRestaurant = query => async (req, res) => {
    const { id } = req.params;

    const [err, restaurant] = await getRestaurant(query, id);
    if (restaurant == null) {
        res.status(404).send("restaurant doesn't exist");
    } else if (err) {
        res.sendStatus(500);
    } else {
        res.status(200).send(restaurant);
    }

    if (err != null) {
        console.log(err);
    }
};

const handleGetRestaurants = query => async (req, res) => {
    const [err, restaurants] = await getRestaurants(query);

    if (err) {
        res.status(500).send();
    } else {
        res.status(200).send(restaurants);
    }

    if (err != null) {
        console.log(err);
    }
};

const handleGetVisibleRestaurants = query => async (req, res) => {};

module.exports = {
    handleAddRestaurant,
    handleEditRestaurant,
    handleDeleteRestaurant,
    handleGetRestaurant,
    handleGetRestaurants,
    handleGetVisibleRestaurants
};
