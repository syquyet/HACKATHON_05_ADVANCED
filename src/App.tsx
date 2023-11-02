import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getData } from "./until/DBUntil";

function App() {
  const [listData, setListData] = useState<any[]>([]);
  const [quantity, setQuantity] = useState<number>(0);
  const [totalMoneyReceipt, setTotalMoneyReceipt] = useState<number>(0);

  // lấy dữ liệu products
  useEffect(() => {
    const fetchdata = async () => {
      const response = await getData("/products");
      setListData(response);
    };
    fetchdata();
  }, []);

  // lấy dữ liệu receipt và set lại tổng tiền trong hóa đơn
  useEffect(() => {
    const fetchdataReceipt = async () => {
      const response = await getData("/receipt");
      let totalMoney = 0;
      response.map((item: any) => {
        totalMoney += item.quantity * item.price;
      });

      setTotalMoneyReceipt(totalMoney);
    };
    fetchdataReceipt();
  }, []);

  // tăng số lượng mua
  const handleCreateQuantity = (id: number) => {
    setQuantity(quantity + 1);
  };
  // giảm số lượng mua
  const hanleReduceQuantity = (id: number) => {
    setQuantity(quantity - 1);
    if (quantity < 0) {
      setQuantity(0);
    }
  };
  return (
    <>
      <header>
        <span>
          Remaining:
          {totalMoneyReceipt == 0 ? 270000000: 270000000 - totalMoneyReceipt}
          USD
        </span>
        <span>You only spent 0,00001% of the total</span>
      </header>
      <main>
        <div className="container">
          <div className="content">
            {listData?.map((item) => (
              <div className="card">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>USD {item.price}</p>
                <div className="card-footer">
                  <button onClick={() => hanleReduceQuantity(item.id)}>
                    set
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => handleCreateQuantity(item.id)}>
                    buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
