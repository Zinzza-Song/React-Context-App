import "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { OrderContextProvider } from "./context/OrderContext.jsx";

createRoot(document.getElementById("root")).render(
  <OrderContextProvider>
    <App />
  </OrderContextProvider>
);
