const queryGetMenu = (query, restaurantId) =>
    query(
        "SELECT * FROM menu WHERE restaurant_id = $1",
        [restaurantId],
        results => results.rows
    );

const queryGetMenuCategories = (query, menuRestaurantId) =>
    query(
        "SELECT menu_category.* " +
            "FROM menu_category_order " +
            "INNER JOIN menu_category ON menu_category_order.category_id = menu_category.id AND menu_category_order.restaurant_id = $1 " +
            "ORDER BY menu_category_order.position DESC",
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
