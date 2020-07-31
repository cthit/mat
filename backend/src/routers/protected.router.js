const { handleSetReview } = require("../controllers/review.controller");
const {
    handleGetMe,
    handleSignOut
} = require("../controllers/authentication.controller");

const getProtectedRouter = (router, tools) => {
    router.get("/me", handleGetMe);
    router.post("/sign-out", handleSignOut);
    router.post("/review", handleSetReview(tools));
    return router;
};

module.exports = getProtectedRouter;
