import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import registerServiceWorker from "./registerServiceWorker";

require("dotenv").config();

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
