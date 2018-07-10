import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App/App";
import registerServiceWorker from "./registerServiceWorker";
import "sweetalert2/src/sweetalert2.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./App/store/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
