import { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Products";
import Options from "./Options";
import ErrorBanner from "./ErrorBanner";

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      const res = await axios.get(`http://localhost:4000/${orderType}`);
      setItems(res.data);
    } catch (err) {
      setError(true);
      setErrorMessage(err.toString());
    }
  };

  if (error) return <ErrorBanner message={errorMessage} />;

  const ItemComponent = orderType === "products" ? Products : Options;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <div>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격:</p>

      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" ? "column" : "row",
        }}
      >
        {optionItems}
      </div>
    </div>
  );
};

export default Type;
