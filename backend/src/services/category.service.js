const uuid = require("uuid").v4;

const { to } = require("../utils/utils");
const {
    queryGetCategories,
    queryAddCategory,
    queryDeleteCategory,
    queryEditCategory,
    queryGetCategory
} = require("../repositories/category.repository");

const addCategory = async (query, category) => {
    const id = uuid();
    const [err, success] = await to(
        queryAddCategory(query, { ...category, id })
    );

    return [err, success];
};

const getCategories = async query => {
    const [err, categories] = await to(queryGetCategories(query));

    return [err, categories];
};

const getCategory = async (query, id) => {
    const [err, result] = await to(queryGetCategory(query, id));

    var category = null;
    if (result.length > 0) {
        category = result[0];
    }

    return [err, category];
};

const editCategory = async (query, id, data) => {
    const [err, success] = await to(queryEditCategory(query, id, data));

    return [err, success];
};

const deleteCategory = async (query, id) => {
    const [err, success] = await to(queryDeleteCategory(query, id));

    return [err, success];
};

module.exports = {
    getCategories,
    addCategory,
    getCategory,
    editCategory,
    deleteCategory
};
