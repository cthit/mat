const { handleGetMe } = require("../controllers/authentication.controller");

const getProtectedRouter = (router, query) => {
    router.get("/me", handleGetMe);
    return router;
};

module.exports = getProtectedRouter;
