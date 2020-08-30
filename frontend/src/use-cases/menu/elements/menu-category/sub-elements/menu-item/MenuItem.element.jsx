import React from "react";
import { DigitDesign, DigitText } from "@cthit/react-digit-components";
import styled from "styled-components";

const ItemLayout = styled.div`
    display: grid;

    grid-template-rows: min-content min-content;
    grid-template-columns: auto min-content;

    align-items: center;

    padding: 8px;
`;

const Name = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
`;

const Price = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
`;

const Description = styled.div`
    grid-column-start: 1;
    grid-column-end: -1;
`;

const MenuItem = ({
    name_sv,
    name_en,
    description_sv,
    description_en,
    price
}) => {
    return (
        <DigitDesign.Card>
            <ItemLayout>
                <Name>
                    <DigitText.Title text={name_sv} />
                </Name>
                <Price>
                    <DigitText.Text wordBreak={"keep-all"} text={price} />
                </Price>
                <Description>
                    <DigitText.Text text={description_sv} />
                </Description>
            </ItemLayout>
        </DigitDesign.Card>
    );
};

export default MenuItem;
