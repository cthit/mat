import React from "react";
import { NonStyledALink } from "../../../common-ui/design";
import {
    DigitButton,
    useDigitTranslations
} from "@cthit/react-digit-components";
import Launch from "@material-ui/icons/Launch";

const RestaurantOpenMenuButton = ({ menu }) => {
    const [text] = useDigitTranslations();

    if (menu == null || menu === "") {
        return (
            <DigitButton
                disabled
                primary
                outlined
                text={text.Menu}
                endIcon={<Launch />}
            />
        );
    }

    return (
        <NonStyledALink target="_blank" href={menu}>
            <DigitButton
                primary
                outlined
                text={text.Menu}
                endIcon={<Launch />}
            />
        </NonStyledALink>
    );
};

export default RestaurantOpenMenuButton;
