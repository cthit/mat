import React from "react";
import { DigitText, useDigitTranslations } from "@cthit/react-digit-components";
import styled from "styled-components";

const CustomCardHeader = styled.div`
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    display: grid;

    grid-template-columns: auto;
    grid-auto-rows: min-content;

    align-items: center;
`;

const RestaurantHeader = ({ data }) => {
    const { category, name, hidden, menu, id } = data;
    const [text, activeLanguage] = useDigitTranslations();

    return (
        <CustomCardHeader>
            <DigitText.Title text={name} />
            {hidden && (
                <DigitText.Subtitle text={text.RestaurantHiddenForOtherUsers} />
            )}
            <DigitText.Subtitle text={category["name_" + activeLanguage]} />
        </CustomCardHeader>
    );
};

export default RestaurantHeader;
