const { handleAddCategory } = require("../controllers/category.controller");

const getAdminRouter = (router, query) => {
    router.post("/categories", handleAddCategory(query));
    return router;
};

module.exports = getAdminRouter;
