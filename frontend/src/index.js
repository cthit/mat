import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./app/App.container";
import { DigitProviders } from "@cthit/react-digit-components";
import rootReducer from "./app/App.reducer";

ReactDOM.render(
    <DigitProviders
        preloadedState={{
            app: {
                categories: {},
                restaurants: []
            }
        }}
        rootReducer={rootReducer}
    >
        <App />
    </DigitProviders>,
    document.getElementById("root")
);
registerServiceWorker();
