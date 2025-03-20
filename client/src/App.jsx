import "react";
import SummaryPage from "./pages/SummaryPage";
import OrderPage from "./pages/OrderPage";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "4rem" }}>
      <OrderPage />
      <SummaryPage />
    </div>
  );
}

export default App;
