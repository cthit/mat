const restaurantValidation = require("./validation/restaurant.validation");
const openingHoursValidation = require("./validation/opening-hours.validation");
const { getRestaurant } = require("../services/restaurant.service");
const {
    addRestaurant,
    getRestaurants,
    deleteRestaurant,
    editRestaurant,
    setOpeningHours
} = require("../services/restaurant.service");

const handleAddRestaurant = ({ query, redisClient }) => async (req, res) => {
    try {
        restaurantValidation().validateSync(req.body);
    } catch (e) {
        res.status(422).send(e);
    }

    const [err] = await addRestaurant(query, redisClient, req.body);

    if (err) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }

    if (err != null) {
        console.log(err);
    }
};

const handleEditRestaurant = ({ query, redisClient }) => async (req, res) => {
    const { id } = req.params;

    try {
        restaurantValidation().validateSync(req.body);
    } catch (e) {
        res.status(422).send(e);
    }

    const [err, success] = await editRestaurant(
        query,
        redisClient,
        id,
        req.body
    );

    if (!success) {
        res.status(404).send("restaurant doesn't exist");
    } else if (err) {
        res.sendStatus(500);
        console.log(err);
    } else {
        res.sendStatus(200);
    }
};

const handleDeleteRestaurant = ({ query, redisClient }) => async (req, res) => {
    const { id } = req.params;

    const [err] = await deleteRestaurant(query, redisClient, id);

    if (err) {
        res.sendStatus(500);
        console.log(err);
    } else {
        res.sendStatus(200);
    }
};

const handleGetRestaurant = ({ query, redisClient }) => async (req, res) => {
    const { id } = req.params;

    const [err, restaurant] = await getRestaurant(query, redisClient, id);

    if (err) {
        if (restaurant == null) {
            res.status(404).send("restaurant doesn't exist");
        } else {
            res.sendStatus(500);
            console.log(err);
        }
    } else {
        res.status(200).send(restaurant);
    }
};

const handleGetRestaurants = ({ query, redisClient }) => async (req, res) => {
    const [err, restaurants] = await getRestaurants(query, redisClient);

    if (err) {
        res.status(500).send();
        console.log(err);
    } else {
        res.status(200).send(restaurants);
    }
};

const handleGetVisibleRestaurants = ({ query, redisClient }) => async (
    req,
    res
) => {
    const [err, restaurants] = await getRestaurants(query, redisClient);

    const visibleRestaurants = restaurants.filter(({ hidden }) => !hidden);

    if (err) {
        res.status(500).send();
        console.log(err);
    } else {
        res.status(200).send(visibleRestaurants);
    }
};

const handleSetOpeningHours = ({ query, redisClient }) => async (req, res) => {
    const { id } = req.params;

    try {
        openingHoursValidation().validateSync(req.body);
    } catch (e) {
        res.status(422).send(e);
    }

    const [err] = await setOpeningHours(query, redisClient, id, req.body);

    if (err) {
        res.status(500);
        console.log(err);
    } else {
        res.sendStatus(200);
    }
};

module.exports = {
    handleAddRestaurant,
    handleEditRestaurant,
    handleDeleteRestaurant,
    handleGetRestaurant,
    handleGetRestaurants,
    handleGetVisibleRestaurants,
    handleSetOpeningHours
};
