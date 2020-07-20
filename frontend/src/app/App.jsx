import React, { useEffect, useMemo } from "react";

import {
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
    const [
        text,
        ,
        setActiveLanguage,
        setCommonTranslations
    ] = useDigitTranslations();

    const [loading, , signIn] = useGamma("/api/me", "/api/auth", false);
    const user = useGammaMe();
    const userLanguage = user == null ? "en" : user.language;

    useEffect(() => {
        setActiveLanguage(userLanguage);
    }, [userLanguage]);

    useEffect(() => {
        setCommonTranslations(translations);
    }, []);

    //Resolves issue where upperLabel and outlined doesn't work together
    if (Object.keys(text) === 0) {
        return null;
    }

    return (
        <DigitHeader
            headerRowProps={{
                flex: "1",
                justifyContent: "space-between"
            }}
            renderCustomHeader={() => (
                <Header loading={loading} signIn={signIn} />
            )}
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
