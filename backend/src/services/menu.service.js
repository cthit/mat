const { to } = require("../utils/utils");
const {
    queryGetMenu,
    queryGetMenuCategories,
    queryGetMenuItems
} = require("../repositories/menu.repository");

const getMenu = async (query, restaurantId) => {
    var [err, [menuInformation, categories, items]] = await to([
        queryGetMenu(query, restaurantId),
        queryGetMenuCategories(query, restaurantId),
        queryGetMenuItems(query, restaurantId)
    ]);

    if (menuInformation.length > 0) {
        menuInformation = menuInformation[0];
    }

    const menu = {
        categories: {},
        ...menuInformation
    };

    categories.forEach(
        ({ id, name_sv, name_en, description_sv, description_en }) => {
            menu.categories[id] = {
                name_sv,
                name_en,
                description_sv,
                description_en,
                items: {}
            };
        }
    );

    items.forEach(
        ({
            id,
            category_id,
            name_sv,
            name_en,
            description_sv,
            description_en,
            price
        }) => {
            menu.categories[category_id].items[id] = {
                name_sv,
                name_en,
                description_sv,
                description_en,
                price
            };
        }
    );

    return [err, menu];
};

module.exports = { getMenu };
