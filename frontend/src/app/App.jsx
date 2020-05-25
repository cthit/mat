import React, { useEffect, useMemo } from "react";

import {
    DigitHeader,
    useDigitTranslations,
    useGamma,
    useGammaMe
} from "@cthit/react-digit-components";
import Tabs from "./elements/tabs";
import Header from "./elements/header";
import { getRestaurants } from "../api/restaurants/get.restaurants.api";
import { useLocation, Switch, Route } from "react-router-dom";
import Admin from "../use-cases/admin";
import Home from "../use-cases/home";

import translations from "./App.translations";
import { getCategories } from "../api/categories/get.categories.api";

const App = ({}) => {
    const { pathname } = useLocation();
    const [
        ,
        ,
        setActiveLanguage,
        setCommonTranslations
    ] = useDigitTranslations();

    useGamma();
    const user = useGammaMe();
    const userLanguage = user == null ? null : user.language;

    useEffect(() => {
        setActiveLanguage(userLanguage);
    }, [userLanguage]);

    useEffect(() => {
        setCommonTranslations(translations);
    }, []);

    const admin = useMemo(() => pathname.startsWith("/admin"), [pathname]);

    return (
        <DigitHeader
            title="Mat"
            headerRowProps={{
                flex: "1",
                justifyContent: "space-between"
            }}
            renderHeader={() => <Header />}
            toolbarHeight={!admin ? "48px" : "0px"}
            renderToolbar={!admin ? () => <Tabs /> : null}
            renderMain={() => (
                <>
                    <Switch>
                        <Route path={"/admin"} component={Admin} />
                        <Route path={"/"} component={Home} />
                    </Switch>
                </>
            )}
        />
    );
};

export default App;
