const {
    handleGetCategories,
    handleGetCategory
} = require("../controllers/category.controller");
const { handleOAuthCode } = require("../controllers/authentication.controller");
const idIsUUIDMiddleware = require("../middlewares/id-is-uuid.middleware");
const {
    handleGetVisibleRestaurants,
    handleGetRestaurantsEatIT,
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
    router.get("/restaurants", handleGetVisibleRestaurants(tools));
    router.get("/mat.json", handleGetRestaurantsEatIT(tools));

    return router;
};

module.exports = getUnprotectedRouter;
