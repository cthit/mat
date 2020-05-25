import React from "react";
import {
    DigitButton,
    DigitGammaActions,
    useGammaMe,
    DigitLayout,
    useDigitTranslations
} from "@cthit/react-digit-components";
import some from "lodash/some";
import { useHistory } from "react-router-dom";

const authority = "admin";

const Header = () => {
    const [text] = useDigitTranslations();
    const history = useHistory();
    const user = useGammaMe();

    const admin =
        user != null && some(user.authorities, ["authority", authority]);

    return (
        <DigitLayout.Row>
            {admin && (
                <DigitButton
                    text={text.AdminView}
                    onClick={() => history.push("/admin")}
                    outlined
                    margin={{ right: "16px" }}
                    size={{ height: "40px" }}
                    alignSelf={"center"}
                />
            )}
            <DigitGammaActions />
        </DigitLayout.Row>
    );
};

export default Header;
