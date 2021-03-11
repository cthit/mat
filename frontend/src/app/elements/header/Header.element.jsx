import React, { useContext } from "react";
import {
    DigitButton,
    DigitGammaActions,
    useGammaMe,
    DigitLayout,
    useDigitTranslations,
    DigitText
} from "@cthit/react-digit-components";
import { useHistory, useLocation } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { postRequest } from "../../../api/utils/api.utils";
import styled from "styled-components";
import Search from "@material-ui/icons/Search";
import FilterMobileOpenContext from "../../../common/contexts/filter-mobile-open";
import useAdmin from "../../../common/hooks/use-admin/use-admin";

const MobileFilterButtonContainer = styled.div`
    margin: 0;

    @media (min-width: 768px) {
        display: none;
    }
`;

const Header = ({ loading, signIn }) => {
    const { pathname } = useLocation();
    const [, setOpen] = useContext(FilterMobileOpenContext);
    const [text] = useDigitTranslations();
    const history = useHistory();
    const user = useGammaMe();
    const admin = useAdmin();

    return (
        <DigitLayout.Row
            flex={"1"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <DigitLayout.Row alignItems={"center"}>
                {pathname === "/" && (
                    <MobileFilterButtonContainer>
                        <DigitButton
                            text={"Filter"}
                            margin={{ right: "16px" }}
                            outlined
                            startIcon={<Search />}
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
                    item === "adminCategories"
                        ? history.push("/admin/categories")
                        : null
                }
                customOptions={{
                    adminCategories: text.AdminCategories
                }}
                customOrder={
                    admin
                        ? ["adminCategories", "viewAccount", "signOut"]
                        : ["viewAccount", "signOut"]
                }
                signOut={() => postRequest("/sign-out")}
                size={{ width: "min-content" }}
                frontendUrl={
                    process.env.NODE_ENV === "development"
                        ? "http://localhost:3000"
                        : "https://gamma.chalmers.it"
                }
                backendUrl={
                    process.env.NODE_ENV === "development"
                        ? "http://localhost:8081/api"
                        : "https://gamma.chalmers.it/api"
                }
            />
        </DigitLayout.Row>
    );
};

export default Header;
