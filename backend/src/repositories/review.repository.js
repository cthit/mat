const querySetReview = (query, uid, review) =>
    query(
        "SELECT AddOrUpdateReview($1,$2,$3,$4)",
        [uid, review.restaurant_id, review.description, review.rating],
        results => results.rowCount > 0
    );

const queryGetReviewsFromRestaurant = (query, restaurantId) =>
    query(
        "SELECT * FROM review WHERE restaurant_id = $1",
        [restaurantId],
        results => results.rows
    );

const queryGetReviews = query =>
    query("SELECT * FROM review", [], results => results.rows);

module.exports = {
    queryGetReviewsFromRestaurant,
    queryGetReviews,
    querySetReview
};
