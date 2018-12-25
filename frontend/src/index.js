import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { DigitProviders } from "@cthit/react-digit-components";
import App from "./app";
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
