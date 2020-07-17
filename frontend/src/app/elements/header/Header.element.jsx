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
import AccountCircle from "@material-ui/icons/AccountCircle";
import { postRequest } from "../../../api/utils/api.utils";

const authority = "admin";

const Header = ({ loading, signIn }) => {
    const [text] = useDigitTranslations();
    const history = useHistory();
    const user = useGammaMe();

    const admin =
        user != null && some(user.authorities, ["authority", authority]);

    return (
        <DigitLayout.Row>
            {!loading && user == null && (
                <DigitButton
                    outlined
                    text={text.SignInWithGamma}
                    startIcon={<AccountCircle />}
                    onClick={signIn}
                />
            )}
            <DigitGammaActions
                customOptionsOnClick={item =>
                    item === "admin" ? history.push("/admin") : null
                }
                customOptions={{ admin: text.AdminView }}
                customOrder={["admin", "viewAccount", "signOut"]}
                signOut={() => postRequest("/sign-out")}
            />
        </DigitLayout.Row>
    );
};

export default Header;
