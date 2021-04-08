const categoryValidation = require("./validation/category.validation");

const {
    addCategory,
    getCategories,
    getCategory,
    editCategory,
    deleteCategory
} = require("../services/category.service");

const handleAddCategory = ({ query }) => async (req, res) => {
    try {
        categoryValidation().validateSync(req.body);
    } catch (e) {
        res.status(422).send(e);
    }

    const [err] = await addCategory(query, req.body);

    if (err) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }

    if (err != null) {
        console.log(err);
    }
};

const handleEditCategory = ({ query }) => async (req, res) => {
    const { id } = req.params;

    try {
        categoryValidation().validateSync(req.body);
    } catch (e) {
        res.status(422).send(e);
    }

    const [err, success] = await editCategory(query, id, req.body);

    if (!success) {
        res.status(404).send("category doesn't exist");
    } else if (err) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }

    if (err != null) {
        console.log(err);
    }
};

const handleDeleteCategory = ({ query }) => async (req, res) => {
    const { id } = req.params;

    const [err, success] = await deleteCategory(query, id);

    if (!success) {
        res.status(404).send("category doesn't exist");
    } else if (err) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }

    if (err != null) {
        console.log(err);
    }
};

const handleGetCategory = ({ query }) => async (req, res) => {
    const { id } = req.params;

    const [err, category] = await getCategory(query, id);
    if (category == null) {
        res.status(404).send("category doesn't exist");
    } else if (err) {
        res.sendStatus(500);
    } else {
        res.status(200).send(category);
    }

    if (err != null) {
        console.log(err);
    }
};

const handleGetCategories = ({ query }) => async (req, res) => {
    const [err, categories] = await getCategories(query);

    if (err) {
        res.status(500).send();
    } else {
        res.status(200).send(categories);
    }

    if (err != null) {
        console.log(err);
    }
};

module.exports = {
    handleAddCategory,
    handleEditCategory,
    handleDeleteCategory,
    handleGetCategories,
    handleGetCategory
};
