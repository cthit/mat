const queryDeleteRestaurant = (query, id) =>
    query(
        "DELETE FROM restaurant WHERE id = $1",
        [id],
        results => results.rowCount > 0
    );

const queryAddRestaurant = (
    query,
    {
        id,
        name,
        category_id,
        menu,
        hidden,
        campus_location,
        maps_link,
        address,
        phone_number
    }
) =>
    query(
        "INSERT INTO restaurant (id, name, category_id, menu, hidden, campus_location, maps_link, address, phone_number) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)",
        [
            id,
            name,
            category_id,
            menu,
            hidden,
            campus_location,
            maps_link,
            address,
            phone_number
        ],
        results => results.rowCount > 0
    );

const queryGetRestaurant = (query, id) =>
    query(
        "SELECT * FROM restaurant WHERE id = $1",
        [id],
        results => results.rows
    );

const queryGetRestaurants = query =>
    query("SELECT * FROM restaurant", [], results => results.rows);

const queryEditRestaurant = (
    query,
    id,
    {
        name,
        category_id,
        menu,
        hidden,
        campus_location,
        maps_link,
        address,
        phone_number
    }
) =>
    query(
        "UPDATE restaurant SET name = $2, category_id = $3, menu = $4, hidden = $5, campus_location = $6, maps_link = $7, phone_number = $8, address = $9 WHERE id = $1",
        [
            id,
            name,
            category_id,
            menu,
            hidden,
            campus_location,
            maps_link,
            phone_number,
            address
        ],
        results => results.rowCount > 0
    );

module.exports = {
    queryDeleteRestaurant,
    queryAddRestaurant,
    queryGetRestaurant,
    queryGetRestaurants,
    queryEditRestaurant
};
