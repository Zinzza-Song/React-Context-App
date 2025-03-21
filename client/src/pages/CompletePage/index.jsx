import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { OrderContext } from "../../context/OrderContext";

const CompletePage = ({ setStep }) => {
  const [orderData] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    orderCompleted(orderData);
  }, [orderData]);

  const orderCompleted = async (orderData) => {
    try {
      const res = await axios.post("http://localhost:4000/order", orderData);
      console.log("res", res);
      setOrderHistory(res.data);
      SetLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const orderTable = orderHistory.map((item) => (
    <tr key={item.orderNmber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));

  if (loading) return <div>...loading</div>;
  else {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>주문이 성공했습니다.</h2>
        <h3>지금까지 모든 주문</h3>
        <table style={{ margin: "auto" }}>
          <tbody>
            <tr>
              <th>number</th>
              <th>price</th>
            </tr>
            {orderTable}
          </tbody>
        </table>
        <br />
        <button onClick={() => setStep(0)}>첫 페이지로</button>
      </div>
    );
  }
};

export default CompletePage;
