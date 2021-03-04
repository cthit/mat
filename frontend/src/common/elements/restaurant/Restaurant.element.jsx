import React from "react";
import {
    DigitDesign,
    DigitButton,
    useDigitTranslations
} from "@cthit/react-digit-components";
import { NonStyledLink } from "../../../common-ui/design";
import RestaurantBody from "../restaurant-body";
import RestaurantHeader from "../restaurant-header";
import RestaurantOpenMenuButton from "../restaurant-open-menu-button/RestaurantOpenMenuButton.element";

const Restaurant = ({ data, disableReview }) => {
    const { menu, id } = data;
    const [text] = useDigitTranslations();

    return (
        <DigitDesign.Card>
            <RestaurantHeader data={data} />
            <DigitDesign.CardBody>
                <RestaurantBody data={data} />
            </DigitDesign.CardBody>
            <DigitDesign.CardButtons reverseDirection>
                <RestaurantOpenMenuButton menu={menu} />
                {!disableReview && (
                    <NonStyledLink to={"/review/" + id}>
                        <DigitButton text={text.Review} secondary outlined />
                    </NonStyledLink>
                )}
            </DigitDesign.CardButtons>
        </DigitDesign.Card>
    );
};

export default Restaurant;
