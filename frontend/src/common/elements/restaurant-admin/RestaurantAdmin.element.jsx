import React from "react";
import { useHistory } from "react-router-dom";
import {
    DigitDesign,
    DigitButton,
    useDigitTranslations,
    DigitIconButton,
    DigitText
} from "@cthit/react-digit-components";
import styled from "styled-components";
import { NonStyledALink, NonStyledLink } from "../../../common-ui/design";
import Edit from "@material-ui/icons/Edit";
import RestaurantBody from "../restaurant-body";

const CustomCardHeader = styled.div`
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    display: grid;

    grid-template-columns: auto min-content;
    grid-template-rows: min-content min-content;

    align-items: center;
`;

const RestaurantAdmin = ({ data, disableReview }) => {
    const { category, name, hidden, menu, id } = data;

    const history = useHistory();
    const [text, activeLanguage] = useDigitTranslations();

    return (
        <DigitDesign.Card>
            <CustomCardHeader>
                <DigitText.Title text={name} />
                <DigitIconButton
                    icon={Edit}
                    onClick={() => history.push("/admin/restaurants/" + id)}
                    gridColumn={{ start: "2", end: "3" }}
                    gridRow={{ start: "1", end: "-1" }}
                />
                {hidden && (
                    <DigitText.Subtitle
                        text={text.RestaurantHiddenForOtherUsers}
                    />
                )}
                <DigitText.Subtitle text={category["name_" + activeLanguage]} />
            </CustomCardHeader>
            <DigitDesign.CardBody>
                <RestaurantBody data={data} />
            </DigitDesign.CardBody>
            <DigitDesign.CardButtons reverseDirection>
                <NonStyledALink target="_blank" href={menu}>
                    <DigitButton
                        disabled={menu == null}
                        primary
                        outlined
                        text="Visa meny"
                    />
                </NonStyledALink>
                {!disableReview && (
                    <NonStyledLink to={"/review/" + id}>
                        <DigitButton text={text.Review} secondary outlined />
                    </NonStyledLink>
                )}
            </DigitDesign.CardButtons>
        </DigitDesign.Card>
    );
};

export default RestaurantAdmin;
