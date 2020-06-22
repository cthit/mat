const {
    handleAddCategory,
    handleEditCategory,
    handleDeleteCategory
} = require("../controllers/category.controller");
const idIsUUIDMiddleware = require("../middlewares/id-is-uuid.middleware");
const {
    handleAddRestaurant,
    handleEditRestaurant,
    handleDeleteRestaurant,
    handleSetOpeningHours
} = require("../controllers/restaurant.controller");

const getAdminRouter = (router, query) => {
    router.post("/categories", handleAddCategory(query));
    router.put(
        "/categories/:id",
        idIsUUIDMiddleware,
        handleEditCategory(query)
    );
    router.delete(
        "/categories/:id",
        idIsUUIDMiddleware,
        handleDeleteCategory(query)
    );

    router.post("/restaurants", handleAddRestaurant(query));
    router.put(
        "/restaurants/:id",
        idIsUUIDMiddleware,
        handleEditRestaurant(query)
    );
    router.delete(
        "/restaurants/:id",
        idIsUUIDMiddleware,
        handleDeleteRestaurant(query)
    );
    router.put(
        "/restaurants/:id/opening_hours",
        idIsUUIDMiddleware,
        handleSetOpeningHours(query)
    );

    return router;
};

module.exports = getAdminRouter;
