const queryDeleteCategory = (query, id) =>
    query(
        "DELETE FROM category WHERE id = $1",
        [id],
        results => results.rowCount > 0
    );

const queryAddCategory = (query, { name_en, name_sv, id }) =>
    query(
        "INSERT INTO category (id, name_en, name_sv) VALUES ($1, $2, $3)",
        [id, name_en, name_sv],
        results => results.rowCount > 0
    );

const queryGetCategory = (query, id) =>
    query(
        "SELECT * FROM category WHERE id = $1",
        [id],
        results => results.rows
    );

const queryGetCategories = query =>
    query("SELECT * FROM category", [], results => results.rows);

const queryEditCategory = (query, id, { name_sv, name_en }) =>
    query(
        "UPDATE category SET name_sv = $2, name_en = $3 WHERE id = $1",
        [id, name_sv, name_en],
        results => results.rowCount > 0
    );

module.exports = {
    queryDeleteCategory,
    queryAddCategory,
    queryGetCategory,
    queryGetCategories,
    queryEditCategory
};
