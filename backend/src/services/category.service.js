const uuid = require("uuid");

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

module.exports = { getCategories, addCategory };
