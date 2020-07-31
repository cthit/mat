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

const getAdminRouter = (router, tools) => {
    router.post("/categories", handleAddCategory(tools));
    router.put(
        "/categories/:id",
        idIsUUIDMiddleware,
        handleEditCategory(tools)
    );
    router.delete(
        "/categories/:id",
        idIsUUIDMiddleware,
        handleDeleteCategory(tools)
    );

    router.post("/restaurants", handleAddRestaurant(tools));
    router.put(
        "/restaurants/:id",
        idIsUUIDMiddleware,
        handleEditRestaurant(tools)
    );
    router.delete(
        "/restaurants/:id",
        idIsUUIDMiddleware,
        handleDeleteRestaurant(tools)
    );
    router.put(
        "/restaurants/:id/opening_hours",
        idIsUUIDMiddleware,
        handleSetOpeningHours(tools)
    );

    return router;
};

module.exports = getAdminRouter;
