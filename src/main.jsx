import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

console.log("%cW00000W😧", "color: #6bde3b; font-size: 14px;");
console.log("%cWhere did you learn this?", "color: #6bde3b;");
console.log(
  "%cI think you have github? then don't be a stranger! follow me there \n https://github.com/IsaqjonovII",
  "color: #6bde3b; font-size: 12px;"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div>
          <h1>Wait, It&apos;s loading!!!</h1>
        </div>
      }
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
