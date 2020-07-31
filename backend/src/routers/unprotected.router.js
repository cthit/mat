const {
    handleGetCategories,
    handleGetCategory
} = require("../controllers/category.controller");
const { handleOAuthCode } = require("../controllers/authentication.controller");
const idIsUUIDMiddleware = require("../middlewares/id-is-uuid.middleware");
const {
    handleGetRestaurants,
    handleGetRestaurant
} = require("../controllers/restaurant.controller");

const getUnprotectedRouter = (router, tools) => {
    router.post("/auth", handleOAuthCode);

    router.get("/categories/:id", idIsUUIDMiddleware, handleGetCategory(tools));
    router.get("/categories", handleGetCategories(tools));

    router.get(
        "/restaurants/:id",
        idIsUUIDMiddleware,
        handleGetRestaurant(tools)
    );
    router.get("/restaurants", handleGetRestaurants(tools));

    return router;
};

module.exports = getUnprotectedRouter;
