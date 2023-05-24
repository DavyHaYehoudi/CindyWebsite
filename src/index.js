import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthAdminProvider } from "./context/AuthAdminProvider";
import { BrowserRouter } from "react-router-dom";
import { MassageSelectProvider } from "./context/MassageSelectProvider";
import { ConsultationSelectProvider } from "./context/ConsultationSelectProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthAdminProvider>
      <MassageSelectProvider>
        <ConsultationSelectProvider>
          <App />
        </ConsultationSelectProvider>
      </MassageSelectProvider>
    </AuthAdminProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
