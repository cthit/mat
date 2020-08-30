import React, { useEffect, useState } from "react";
import {
    getMenu,
    getRestaurant
} from "../../api/restaurants/get.restaurants.api";
import MenuCategory from "./elements/menu-category";
import styled from "styled-components";

const MenuCategoriesContainer = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: min-content;
    grid-gap: 8px;
`;

const Menu = ({ match }) => {
    const { id } = match.params;

    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        Promise.all([getRestaurant(id), getMenu(id)]).then(
            ([restaurantResponse, menuResponse]) => {
                setRestaurant(restaurantResponse.data);
                setMenu(menuResponse.data);
            }
        );
    }, [id]);

    if (restaurant == null || menu == null) {
        return null;
    }

    return (
        <MenuCategoriesContainer>
            {Object.keys(menu.categories).map(categoryId => (
                <MenuCategory
                    key={categoryId}
                    {...menu.categories[categoryId]}
                />
            ))}
        </MenuCategoriesContainer>
    );
};

export default Menu;
