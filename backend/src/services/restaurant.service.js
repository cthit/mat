const { getUsers } = require("./gamma.service");
const {
    queryGetReviewsFromRestaurant,
    queryGetReviews
} = require("../repositories/review.repository");
const uuid = require("uuid").v4;
const { to } = require("../utils/utils");
const {
    queryGetRestaurants,
    queryAddRestaurant,
    queryDeleteRestaurant,
    queryEditRestaurant,
    queryGetRestaurant,
    queryGetRestaurantCategory
} = require("../repositories/restaurant.repository");
const {
    querySetOpeningHours,
    queryGetOpeningHours,
    queryGetAllOpeningHours,
    queryDeleteOpeningHours
} = require("../repositories/opening-hours.repository");
const { queryGetCategories } = require("../repositories/category.repository");

const { find, filter } = require("lodash");

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
    const [
        err,
        [restaurants, allOpeningHours, reviews, categories]
    ] = await to([
        queryGetRestaurants(query),
        queryGetAllOpeningHours(query),
        queryGetReviews(query),
        queryGetCategories(query)
    ]);

    const output = restaurants.map(restaurant => {
        const restaurantReviews = filter(reviews, [
            "restaurant_id",
            restaurant.id
        ]);

        var rating = null;
        if (restaurantReviews != null && restaurantReviews.length > 0) {
            rating =
                restaurantReviews.reduce(
                    (totalRating, review) =>
                        parseInt(review.rating + totalRating),
                    0
                ) / restaurantReviews.length;

            //Rounds to one decimal point
            rating = Math.round(rating * 10) / 10;
        }

        return {
            ...restaurant,
            openingHours: e_weekdays.map(weekday => {
                const c = find(allOpeningHours, {
                    weekday,
                    restaurant_id: restaurant.id
                });
                return c == null
                    ? { weekday, opens: null, closes: null }
                    : { weekday, opens: c.opens, closes: c.closes };
            }),
            category: find(categories, { id: restaurant.category_id }),
            rating
        };
    });

    return [err, output];
};

const getRestaurant = async (query, redisClient, id) => {
    const [
        err,
        [
            restaurantResult,
            openingHoursResult,
            reviewsResult,
            usersResult,
            categoryResult
        ]
    ] = await to([
        queryGetRestaurant(query, id),
        queryGetOpeningHours(query, id),
        queryGetReviewsFromRestaurant(query, id),
        getUsers(redisClient),
        queryGetRestaurantCategory(query, id)
    ]);

    if (err) {
        return [err, null];
    }

    var restaurant = null;
    if (restaurantResult.length > 0) {
        restaurant = restaurantResult[0];
    }

    if (restaurant == null) {
        return [err, null];
    }

    const openingHours = e_weekdays.map(weekday => {
        const c = find(openingHoursResult, ["weekday", weekday]);
        return c == null ? { weekday, opens: null, closes: null } : c;
    });

    const reviews = reviewsResult.map(
        ({ uid, rating, description, created_at, updated_at }) => {
            const user = find(usersResult, ["id", uid]);
            const nick = user == null ? "Unknown user" : user.nick;
            const avatarUrl = user == null ? null : user.avatarUrl;

            return {
                reviewer: { nick, avatarUrl, uid },
                rating,
                description,
                created_at,
                updated_at
            };
        }
    );

    var rating =
        reviewsResult.reduce(
            (totalRating, review) => parseInt(review.rating + totalRating),
            0
        ) / reviewsResult.length;

    //Rounds to one decimal point
    rating = Math.round(rating * 10) / 10;

    const category = categoryResult.length > 0 ? categoryResult[0] : null;

    return [err, { ...restaurant, openingHours, reviews, rating, category }];
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

    return [err];
};

module.exports = {
    getRestaurants,
    addRestaurant,
    getRestaurant,
    editRestaurant,
    deleteRestaurant,
    setOpeningHours
};
