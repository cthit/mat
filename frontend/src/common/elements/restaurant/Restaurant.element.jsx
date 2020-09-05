import React from "react";
import {
    DigitDesign,
    DigitButton,
    useDigitTranslations
} from "@cthit/react-digit-components";
import { NonStyledALink, NonStyledLink } from "../../../common-ui/design";
import RestaurantBody from "../restaurant-body";
import RestaurantHeader from "../restaurant-header";
import Launch from "@material-ui/icons/Launch";
import RestaurantOpenMenuButton from "../restaurant-open-menu-button/RestaurantOpenMenuButton.element";

const Restaurant = ({ data, disableReview }) => {
    const { menu, id, has_custom_menu } = data;
    const [text] = useDigitTranslations();

    console.log(menu);
    console.log(data);

    return (
        <DigitDesign.Card>
            <RestaurantHeader data={data} />
            <DigitDesign.CardBody>
                <RestaurantBody data={data} />
            </DigitDesign.CardBody>
            <DigitDesign.CardButtons reverseDirection>
                <RestaurantOpenMenuButton
                    menu={menu}
                    hasCustomMenu={has_custom_menu}
                    id={id}
                />
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
