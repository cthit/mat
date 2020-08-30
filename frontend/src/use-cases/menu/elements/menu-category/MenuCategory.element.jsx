import React from "react";
import { DigitText } from "@cthit/react-digit-components";
import MenuItem from "./sub-elements/menu-item";
import styled from "styled-components";

const MenuCategoryTitleContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: -1;
`;

const MenuItemContainer = styled.div`
    display: grid;
    grid-auto-rows: min-content;
    grid-template-columns: 200px 200px;
    grid-gap: 8px;
`;

const MenuCategory = ({
    name_sv,
    name_en,
    description_sv,
    description_en,
    items
}) => {
    return (
        <>
            <MenuCategoryTitleContainer>
                <DigitText.Title text={name_sv} />
            </MenuCategoryTitleContainer>
            <MenuItemContainer>
                {Object.keys(items).map(itemId => (
                    <MenuItem key={itemId} {...items[itemId]} />
                ))}
            </MenuItemContainer>
        </>
    );
};

export default MenuCategory;
