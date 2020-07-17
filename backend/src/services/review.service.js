const { to } = require("../utils/utils");
const { querySetReview } = require("../repositories/review.repository");
const setReview = async (query, uid, review) => {
    const [err] = await to(querySetReview(query, uid, review));

    return [err];
};

module.exports = {
    setReview
};
