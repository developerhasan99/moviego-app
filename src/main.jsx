import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DailyProvider } from "./context/dailyContext";
import App from "./App";
import { MyProvider } from "./context/myContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DailyProvider>
      <MyProvider>
        <App />
      </MyProvider>
    </DailyProvider>
  </BrowserRouter>
);
