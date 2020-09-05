import React from "react";
import { NonStyledALink, NonStyledLink } from "../../../common-ui/design";
import {
    DigitButton,
    useDigitTranslations
} from "@cthit/react-digit-components";
import Launch from "@material-ui/icons/Launch";

const RestaurantOpenMenuButton = ({ hasCustomMenu, id, menu }) => {
    const [text] = useDigitTranslations();

    if (hasCustomMenu) {
        return (
            <NonStyledLink to={"/menu/" + id}>
                <DigitButton primary outlined text={text.OpenMenu} />
            </NonStyledLink>
        );
    } else {
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
    }
};

export default RestaurantOpenMenuButton;
