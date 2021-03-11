const { gammaSettings } = require("../utils/gamma");
const {
    handleSetReview,
    handleDeleteReview
} = require("../controllers/review.controller");
const {
    handleGetMe,
    handleSignOut
} = require("../controllers/authentication.controller");

const MAT_AUTHORITY = gammaSettings.authority;

const checkIfSignedUserOrAdmin = (req, res, next) => {
    const authorities = req.session.user.authorities;

    //Either the signed in user that's trying to delete or an admin
    if (
        req.params.userId === req.session.uid ||
        authorities.map(({ authority }) => authority).includes(MAT_AUTHORITY)
    ) {
        next();
    } else {
        res.status(403).send("FORBIDDEN");
    }
};

const getProtectedRouter = (router, tools) => {
    router.get("/me", handleGetMe);
    router.post("/sign-out", handleSignOut);
    router.post("/review", handleSetReview(tools));

    router.delete(
        "/restaurants/:restaurantId/:userId",
        checkIfSignedUserOrAdmin,
        handleDeleteReview(tools)
    );
    return router;
};

module.exports = getProtectedRouter;
