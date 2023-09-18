import "@fontsource-variable/inter";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/styles.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
