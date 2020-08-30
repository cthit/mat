const queryGetMenu = (query, restaurantId) =>
    query(
        "SELECT * FROM menu WHERE restaurant_id = $1",
        [restaurantId],
        results => results.rows
    );

const queryGetMenuCategories = (query, menuRestaurantId) =>
    query(
        "SELECT * FROM menu_category WHERE menu_restaurant_id = $1",
        [menuRestaurantId],
        results => results.rows
    );

const queryGetMenuItems = (query, menuRestaurantId) =>
    query(
        "SELECT menu_item.* FROM menu_category JOIN menu_item ON menu_restaurant_id = $1 AND menu_category.id = category_id",
        [menuRestaurantId],
        results => results.rows
    );

module.exports = {
    queryGetMenu,
    queryGetMenuCategories,
    queryGetMenuItems
};
