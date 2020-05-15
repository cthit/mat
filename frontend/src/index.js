import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { DigitProviders } from "@cthit/react-digit-components";

ReactDOM.render(
    <DigitProviders>
        <App />
    </DigitProviders>,
    document.getElementById("root")
);
