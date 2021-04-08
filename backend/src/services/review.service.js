const { to } = require("../utils/utils");
const {
    querySetReview,
    queryDeleteReview
} = require("../repositories/review.repository");

const setReview = async (query, uid, review) => {
    const [err] = await to(querySetReview(query, uid, review));

    return [err];
};

const deleteReview = async (query, restaurantId, userId) => {
    const [err] = await to(queryDeleteReview(query, restaurantId, userId));

    return [err];
};

module.exports = {
    setReview,
    deleteReview
};
