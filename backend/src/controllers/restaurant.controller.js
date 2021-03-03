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

const handleAddRestaurant = ({ query }) => async (req, res) => {
    try {
        restaurantValidation().validateSync(req.body);
    } catch (e) {
        res.status(422).send(e);
    }

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

const handleEditRestaurant = ({ query }) => async (req, res) => {
    const { id } = req.params;

    try {
        restaurantValidation().validateSync(req.body);
    } catch (e) {
        res.status(422).send(e);
    }

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

const handleDeleteRestaurant = ({ query }) => async (req, res) => {
    const { id } = req.params;

    const [err] = await deleteRestaurant(query, id);

    if (err) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }

    if (err != null) {
        console.log(err);
    }
};

const handleGetRestaurant = ({ query, redisClient }) => async (req, res) => {
    const { id } = req.params;

    const [err, restaurant] = await getRestaurant(query, redisClient, id);

    if (err) {
        res.sendStatus(500);
    } else if (restaurant == null) {
        res.status(404).send("restaurant doesn't exist");
    } else {
        res.status(200).send(restaurant);
    }

    if (err != null) {
        console.log(err);
    }
};

// Backport from old version of mat that cthit/EatIT still uses.
const handleGetRestaurantsEatIT = ({ query }) => async (req, res) => {
    const [err, restaurants] = await getRestaurants(query);

    // Since EatIT expects menu not to be null, let's ignore them!
    const formattedRestaurants = restaurants
        .filter(({ menu, hidden }) => menu != null && !hidden)
        .map(({ name, menu }) => ({ name, link_to_menu: menu }));

    if (err) {
        res.status(500).send();
    } else {
        res.status(200).send(formattedRestaurants);
    }

    if (err != null) {
        console.log(err);
    }
};
const handleGetRestaurants = ({ query }) => async (req, res) => {
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

const handleGetVisibleRestaurants = ({ query }) => async (req, res) => {
    const [err, restaurants] = await getRestaurants(query);

    const visibleRestaurants = restaurants.filter(({ hidden }) => !hidden);

    if (err) {
        res.status(500).send();
    } else {
        res.status(200).send(visibleRestaurants);
    }

    if (err != null) {
        console.log(err);
    }
};

const handleSetOpeningHours = ({ query }) => async (req, res) => {
    const { id } = req.params;

    try {
        openingHoursValidation().validateSync(req.body);
    } catch (e) {
        res.status(422).send(e);
    }

    const [err, success] = await setOpeningHours(query, id, req.body);

    res.sendStatus(200);
};

module.exports = {
    handleAddRestaurant,
    handleEditRestaurant,
    handleDeleteRestaurant,
    handleGetRestaurant,
    handleGetRestaurants,
    handleGetVisibleRestaurants,
    handleSetOpeningHours,
    handleGetRestaurantsEatIT
};
