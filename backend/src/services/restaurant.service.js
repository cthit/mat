const uuid = require("uuid").v4;
const { to } = require("../utils/utils");
const {
    queryGetRestaurants,
    queryAddRestaurant,
    queryDeleteRestaurant,
    queryEditRestaurant,
    queryGetRestaurant
} = require("../repositories/restaurant.repository");
const {
    querySetOpeningHours,
    queryGetOpeningHours,
    queryGetAllOpeningHours,
    queryDeleteOpeningHours
} = require("../repositories/opening-hours.repository");
const { find } = require("lodash");

const e_weekdays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

const addRestaurant = async (query, restaurant) => {
    const id = uuid();
    const [err, success] = await to(
        queryAddRestaurant(query, { ...restaurant, id })
    );

    return [err, success];
};

const getRestaurants = async query => {
    const [err, [restaurants, allOpeningHours]] = await to([
        queryGetRestaurants(query),
        queryGetAllOpeningHours(query)
    ]);

    const output = restaurants.map(restaurant => ({
        ...restaurant,
        openingHours: e_weekdays.map(weekday => {
            const c = find(allOpeningHours, {
                weekday,
                restaurant_id: restaurant.id
            });
            return c == null
                ? { weekday, opens: null, closes: null }
                : { weekday, opens: c.opens, closes: c.closes };
        })
    }));

    return [err, output];
};

const getRestaurant = async (query, id) => {
    const [err, [result, result2]] = await to([
        queryGetRestaurant(query, id),
        queryGetOpeningHours(query, id)
    ]);

    const openingHours = e_weekdays.map(weekday => {
        const c = find(result2, ["weekday", weekday]);
        return c == null ? { weekday, opens: null, closes: null } : c;
    });

    var restaurant = null;
    if (result.length > 0) {
        restaurant = result[0];
    }

    return [err, { ...restaurant, openingHours }];
};

const editRestaurant = async (query, id, data) => {
    const [err, success] = await to(queryEditRestaurant(query, id, data));

    return [err, success];
};

const deleteRestaurant = async (query, id) => {
    const [err, success] = await to(queryDeleteRestaurant(query, id));

    return [err, success];
};

const setOpeningHours = async (query, id, weekdays) => {
    const errs = [];
    var totalSuccess = true;

    const [err] = await to([
        weekdays.map((weekday, i) =>
            weekday.opens == null || weekday.closes == null
                ? queryDeleteOpeningHours(query, id, e_weekdays[i])
                : querySetOpeningHours(query, id, {
                      ...weekday,
                      weekday: e_weekdays[i]
                  })
        )
    ]);

    return [err, err == null];
};

module.exports = {
    getRestaurants,
    addRestaurant,
    getRestaurant,
    editRestaurant,
    deleteRestaurant,
    setOpeningHours
};
