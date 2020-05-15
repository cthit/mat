import React, { useMemo } from "react";
import { DigitTabs } from "@cthit/react-digit-components";
import { useLocation, useHistory } from "react-router-dom";
import findIndex from "lodash/findIndex";

const tabs = [
    {
        text: "Pizza",
        value: "pizza"
    },
    {
        text: "Thai",
        value: "thai"
    },
    {
        text: "Övrigt",
        value: "other"
    },
    {
        text: "Hamburgare",
        value: "hamburger"
    },
    {
        text: "Sushi",
        value: "sushi"
    },
    {
        text: "Baguetter",
        value: "baguettes"
    },
    {
        text: "Lunch",
        value: "lunch"
    }
];

const Tabs = () => {
    const { pathname } = useLocation();
    const history = useHistory();

    return (
        <DigitTabs
            onChange={value => history.push(value)}
            selected={pathname === "/" ? "pizza" : pathname.substring(1)}
            tabs={tabs}
        />
    );
};

export default Tabs;
