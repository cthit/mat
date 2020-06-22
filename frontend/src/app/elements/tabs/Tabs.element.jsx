import React from "react";
import { DigitTabs } from "@cthit/react-digit-components";
import { useLocation, useHistory } from "react-router-dom";

const tabs = [
    { text: "Johanneberg", value: "johanneberg" },
    { text: "Lindholmen", value: "lindholmen" }
];

const Tabs = () => {
    const { pathname } = useLocation();
    const history = useHistory();

    return (
        <DigitTabs
            centered
            fullWidth
            titleFont
            onChange={value => history.push(value)}
            selected={pathname === "/" ? "johanneberg" : pathname.substring(1)}
            tabs={tabs}
        />
    );
};

export default Tabs;
