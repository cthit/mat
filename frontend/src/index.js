import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./app/App.container";

import { DigitProviders } from "@cthit/react-digit-components";

ReactDOM.render(
    <DigitProviders>
        <App />
    </DigitProviders>,
    document.getElementById("root")
);
registerServiceWorker();
