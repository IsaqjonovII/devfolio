import { Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Loader from "components/Loader";

console.log("%cW00000W😧", "color: #6bde3b; font-size: 14px;");
console.log("%cWhere did you learn this?", "color: #6bde3b;");
console.log(
  "%cI think you have github? then don't be a stranger! follow me there \n https://github.com/IsaqjonovII",
  "color: #6bde3b; font-size: 12px;"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
