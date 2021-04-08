const querySetOpeningHours = (
    query,
    restaurant_id,
    { weekday, opens, closes }
) =>
    query(
        "SELECT AddOrUpdateOpeningHours($1,$2,$3,$4)",
        [restaurant_id, weekday, opens, closes],
        results => results.rowCount > 0
    );

const queryGetOpeningHours = (query, restaurant_id) =>
    query(
        "SELECT weekday, opens, closes FROM opening_hours WHERE restaurant_id = $1",
        [restaurant_id],
        results => results.rows
    );

const queryGetAllOpeningHours = query =>
    query("SELECT * FROM opening_hours", [], results => results.rows);

const queryDeleteOpeningHours = (query, restaurant_id, weekday) =>
    query(
        "DELETE FROM opening_hours WHERE restaurant_id = $1 AND weekday = $2",
        [restaurant_id, weekday],
        results => results.rowCount > 0
    );

module.exports = {
    querySetOpeningHours,
    queryGetOpeningHours,
    queryGetAllOpeningHours,
    queryDeleteOpeningHours
};
