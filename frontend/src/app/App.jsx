import React, { useEffect, useMemo } from "react";

import {
    DigitBottomNavigation,
    DigitHeader,
    useDigitTranslations,
    useGamma,
    useGammaMe
} from "@cthit/react-digit-components";
import Tabs from "./elements/tabs";
import Header from "./elements/header";
import { useLocation, Switch, Route } from "react-router-dom";
import Admin from "../use-cases/admin";
import Restaurants from "../use-cases/restaurants";
import translations from "./App.translations";
import ReviewRestaurant from "../use-cases/review-restaurant";

const App = ({}) => {
    const { pathname } = useLocation();
    const [
        ,
        ,
        setActiveLanguage,
        setCommonTranslations
    ] = useDigitTranslations();

    const [loading, , signIn] = useGamma("/api/me", "/api/auth", false);
    const user = useGammaMe();
    const userLanguage = user == null ? null : user.language;

    useEffect(() => {
        setActiveLanguage(userLanguage);
    }, [userLanguage]);

    useEffect(() => {
        setCommonTranslations(translations);
    }, []);

    return (
        <DigitHeader
            title="Mat"
            headerRowProps={{
                flex: "1",
                justifyContent: "space-between"
            }}
            renderHeader={() => <Header loading={loading} signIn={signIn} />}
            toolbarHeight={"auto"}
            renderMain={() => (
                <>
                    <Switch>
                        <Route path={"/admin"} component={Admin} />
                        <Route
                            path={"/review/:id"}
                            component={ReviewRestaurant}
                        />
                        <Route path={"/"} component={Restaurants} />
                    </Switch>
                </>
            )}
        />
    );
};

export default App;
