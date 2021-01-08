import React, { useEffect, useState } from "react";
import {
    getMenu,
    getRestaurant
} from "../../api/restaurants/get.restaurants.api";
import MenuCategory from "./elements/menu-category";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowBack from "@material-ui/icons/ArrowBack";
import {
    DigitButton,
    useDigitTranslations
} from "@cthit/react-digit-components";

const Grid = styled.div`
    display: grid;

    grid-gap: 1rem;

    flex: 1;
    justify-content: center;
    align-content: center;
`;

const MenuCategoriesContainer = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: min-content;
    grid-gap: 8px;
`;

const RestaurantsLink = styled(Link)`
    grid-column-start: 1;
    grid-column-end: -1;
    text-decoration: none;
    color: inherit;
`;

const Menu = ({ match }) => {
    const { id } = match.params;

    const [text] = useDigitTranslations();

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
        <Grid>
            <RestaurantsLink to={"/"}>
                <DigitButton
                    outlined
                    justifySelf={"flex-start"}
                    startIcon={<ArrowBack />}
                    text={text.BackToRestaurants}
                />
            </RestaurantsLink>
            <MenuCategoriesContainer>
                {Object.keys(menu.categories).map(categoryId => (
                    <MenuCategory
                        key={categoryId}
                        {...menu.categories[categoryId]}
                    />
                ))}
            </MenuCategoriesContainer>
        </Grid>
    );
};

export default Menu;
