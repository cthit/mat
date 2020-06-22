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
            toolbarHeight={"auto"}
            renderMain={() => (
                <>
                    <Switch>
                        <Route path={"/admin"} component={Admin} />
                        <Route path={"/"} component={Restaurants} />
                    </Switch>
                </>
            )}
        />
    );
};

export default App;
