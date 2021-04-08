const reviewValidation = require("./validation/review.validation");
const { setReview, deleteReview } = require("../services/review.service");

const handleSetReview = ({ query }) => async (req, res) => {
    try {
        reviewValidation().validateSync(req.body);
    } catch (e) {
        res.status(422).send(e);
    }

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

const handleDeleteReview = ({ query }) => async (req, res) => {
    const [err] = await deleteReview(
        query,
        req.params.restaurantId,
        req.params.userId
    );

    res.sendStatus(200);
};

module.exports = { handleSetReview, handleDeleteReview };
