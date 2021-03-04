import React from "react";
import { NonStyledALink } from "../../../common-ui/design";
import {
    DigitButton,
    useDigitTranslations
} from "@cthit/react-digit-components";
import Launch from "@material-ui/icons/Launch";

const RestaurantOpenMenuButton = ({ menu }) => {
    const [text] = useDigitTranslations();

    return (
        <NonStyledALink target="_blank" href={menu}>
            <DigitButton
                disabled={menu == null}
                primary
                outlined
                text={text.OpenMenu}
                endIcon={menu == null ? null : <Launch />}
            />
        </NonStyledALink>
    );
};

export default RestaurantOpenMenuButton;
