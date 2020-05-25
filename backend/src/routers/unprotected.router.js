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

const getUnprotectedRouter = (router, query) => {
    router.post("/auth", handleOAuthCode);

    router.get("/categories/:id", idIsUUIDMiddleware, handleGetCategory(query));
    router.get("/categories", handleGetCategories(query));

    router.get(
        "/restaurants/:id",
        idIsUUIDMiddleware,
        handleGetRestaurant(query)
    );
    router.get("/restaurants", handleGetRestaurants(query));

    return router;
};

module.exports = getUnprotectedRouter;
