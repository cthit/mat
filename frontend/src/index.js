import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { DigitProviders } from "@cthit/react-digit-components";
import { FilterMobileOpenContextSingletonProvider } from "./common/contexts/filter-mobile-open/FilterMobileOpen.context";

ReactDOM.render(
    <React.StrictMode>
        <DigitProviders>
            <FilterMobileOpenContextSingletonProvider>
                <App />
            </FilterMobileOpenContextSingletonProvider>
        </DigitProviders>
    </React.StrictMode>,
    document.getElementById("root")
);
