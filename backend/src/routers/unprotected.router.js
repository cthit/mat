const { handleGetCategories } = require("../controllers/category.controller");
const { handleOAuthCode } = require("../controllers/authentication.controller");

const getUnprotectedRouter = (router, query) => {
    router.post("/auth", handleOAuthCode);
    router.get("/categories", handleGetCategories(query));
    return router;
};

module.exports = getUnprotectedRouter;
