const { addCategory } = require("../services/category.service");
const { getCategories } = require("../services/category.service");

const handleAddCategory = query => async (req, res) => {
    console.log(req.body);
    const [err] = await addCategory(query, req.body);

    if (err) {
        res.status(500).send();
    } else {
        res.status(201).send();
    }
};

const handleEditCategory = query => async (req, res) => {};

const handleDeleteCategory = query => async (req, res) => {};

const handleGetCategory = query => async (req, res) => {};

const handleGetCategories = query => async (req, res) => {
    const [err, categories] = await getCategories(query);

    if (err) {
        res.status(500).send();
    } else {
        console.log(categories);
        res.status(200).send(categories);
    }
};

module.exports = {
    handleAddCategory,
    handleEditCategory,
    handleDeleteCategory,
    handleGetCategories,
    handleGetCategory
};
