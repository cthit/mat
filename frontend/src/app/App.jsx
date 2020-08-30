import React, { useEffect } from "react";

import {
    DigitHeader,
    useDigitTranslations,
    useGamma,
    useGammaMe
} from "@cthit/react-digit-components";
import Header from "./elements/header";
import { Switch, Route } from "react-router-dom";
import Admin from "../use-cases/admin";
import Restaurants from "../use-cases/restaurants";
import translations from "./App.translations";
import ReviewRestaurant from "../use-cases/review-restaurant";
import FourZeroFour from "../common/elements/fourzerofour";
import Menu from "../use-cases/menu";

const getUserLanguage = user => {
    var language = user == null ? null : user.language;

    if (language == null) {
        language = localStorage.getItem("language");
    }

    if (language == null) {
        language = "en";
    }

    return language;
};

const App = () => {
    const [
        text,
        ,
        setActiveLanguage,
        setCommonTranslations
    ] = useDigitTranslations();

    const [loading, , signIn] = useGamma("/api/me", "/api/auth", false);
    const user = useGammaMe();
    const userLanguage = getUserLanguage(user);

    useEffect(() => {
        setActiveLanguage(userLanguage);
    }, [setActiveLanguage, userLanguage]);

    useEffect(() => {
        setCommonTranslations(translations);
    }, [setCommonTranslations]);

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
                        <Route path={"/menu/:id"} component={Menu} />
                        <Route
                            path={"/review/:id"}
                            exact
                            component={ReviewRestaurant}
                        />
                        <Route exact path={"/"} component={Restaurants} />
                        <Route component={FourZeroFour} />
                    </Switch>
                </>
            )}
        />
    );
};

export default App;
