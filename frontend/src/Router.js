import React from "react";
import App from "./App.container";
import { DigitProviders } from "@cthit/react-digit-components";

const ReactRouter = () => (
    <DigitProviders>
        <App />
    </DigitProviders>
);

export default ReactRouter;
