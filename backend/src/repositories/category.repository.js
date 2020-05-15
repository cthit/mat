const queryDeleteCategory = name_en =>
    query(
        "DELETE FROM category WHERE name_en = $1",
        [name_en],
        results => results.rowCount > 0
    );

const queryAddCategory = (query, { name_en, name_sv, id }) =>
    query(
        "INSERT INTO category (id, name_en, name_sv) VALUES ($1, $2, $3)",
        [id, name_en, name_sv],
        results => results.rowCount > 0
    );

const queryGetCategory = name_en =>
    query("SELECT * FROM category WHERE name_en = $1", [name_en]);

const queryGetCategories = query =>
    query("SELECT * FROM category", [], results => results.rows);

const queryEditCategory = (nameEn, data) => {};

module.exports = {
    queryDeleteCategory,
    queryAddCategory,
    queryGetCategory,
    queryGetCategories,
    queryEditCategory
};
