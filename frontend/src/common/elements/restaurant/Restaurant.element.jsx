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

const Restaurant = ({ data, disableReview }) => {
    const { menu, id, has_custom_menu } = data;
    const [text] = useDigitTranslations();

    return (
        <DigitDesign.Card>
            <RestaurantHeader data={data} />
            <DigitDesign.CardBody>
                <RestaurantBody data={data} />
            </DigitDesign.CardBody>
            <DigitDesign.CardButtons reverseDirection>
                {has_custom_menu && (
                    <NonStyledLink to={"/menu/" + id}>
                        <DigitButton primary outlined text={text.OpenMenu} />
                    </NonStyledLink>
                )}
                {!has_custom_menu && (
                    <NonStyledALink target="_blank" href={menu}>
                        <DigitButton
                            disabled={menu == null}
                            primary
                            outlined
                            text={
                                menu == null ? text.OpenMenu : text.OpenMenuLink
                            }
                            endIcon={menu == null ? null : <Launch />}
                        />
                    </NonStyledALink>
                )}
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
