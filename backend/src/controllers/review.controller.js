const { setReview } = require("../services/review.service");
const handleSetReview = ({ query }) => async (req, res) => {
    const [err] = await setReview(query, req.session.uid, req.body);

    if (err) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }

    if (err != null) {
        console.log(err);
    }
};

module.exports = { handleSetReview };
