import React, { useContext } from "react";
import {
    DigitButton,
    DigitGammaActions,
    useGammaMe,
    DigitLayout,
    useDigitTranslations,
    DigitText,
    DigitIconButton
} from "@cthit/react-digit-components";
import some from "lodash/some";
import { useHistory, useLocation } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { postRequest } from "../../../api/utils/api.utils";
import styled from "styled-components";
import Search from "@material-ui/icons/Search";
import FilterMobileOpenContext from "../../../common/contexts/filter-mobile-open";

const authority = "admin";

const MobileFilterButtonContainer = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
`;

const Header = ({ loading, signIn }) => {
    const { pathname } = useLocation();
    const [open, setOpen] = useContext(FilterMobileOpenContext);
    const [text] = useDigitTranslations();
    const history = useHistory();
    const user = useGammaMe();

    const admin =
        user != null && some(user.authorities, ["authority", authority]);

    return (
        <DigitLayout.Row
            flex={"1"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <DigitLayout.Row alignItems={"center"}>
                {pathname === "/" && (
                    <MobileFilterButtonContainer>
                        <DigitIconButton
                            margin={"0"}
                            icon={Search}
                            onClick={() => setOpen(true)}
                        />
                    </MobileFilterButtonContainer>
                )}
                <DigitText.Title text={"Mat"} />
            </DigitLayout.Row>
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
                size={{ width: "min-content" }}
            />
        </DigitLayout.Row>
    );
};

export default Header;
