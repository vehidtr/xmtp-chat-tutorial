import React from "react";
import ReactDOM from "react-dom/client";
import { Buffer } from "buffer";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WalletContextProvider } from "./contexts/WalletContext";
import { XmtpContextProvider } from "./contexts/XmtpContext";

window.Buffer = Buffer;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WalletContextProvider>
      <XmtpContextProvider>
        <App />
      </XmtpContextProvider>
    </WalletContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
