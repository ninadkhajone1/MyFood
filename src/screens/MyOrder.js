import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    const response = await fetch("http://localhost:5000/api/auth/myOrderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: localStorage.getItem('userEmail') })
    });

    const data = await response.json();
    if (data.orderData && data.orderData.order_data) {
      setOrderData(data.orderData.order_data);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />

      <div className='container'>
        <div className='row'>
          {
            orderData.length !== 0
              ? orderData.slice(0).reverse().map((order, index) => (
                <div key={index}>
                  <div className='text-white mt-4 fw-bold fs-5'>
                    {new Date(order[0].Order_date).toDateString()}
                    <hr />
                  </div>

                  {
                    order.slice(1).map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className='text-white bg-dark p-3 mb-3 rounded shadow-sm'
                        style={{ border: "1px solid #444" }}
                      >
                        <h5 className='fw-semibold'>{item.name}</h5>
                        <div className='d-flex justify-content-between'>
                          <div>{item.qty} {item.size}</div>
                          <div>{new Date(order[0].Order_date).toDateString().split(' ').slice(0, 3).join(' ')}</div>
                        </div>
                        <div className='fw-bold'>₹{item.price}/-</div>
                      </div>
                    ))
                  }
                </div>
              ))
              : <div className='text-center fs-4 mt-5 text-light'>No Orders Yet</div>
          }
        </div>
      </div>

      <Footer />
    </div>
  );
}
