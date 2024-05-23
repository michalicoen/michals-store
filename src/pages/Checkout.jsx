import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Checkout =({totalPrice})=> {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPaymentCompleted(true);
  };

  if (paymentCompleted) {
    return (
      <div>
        <h2>Thank you for your purchase!</h2>
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
    );
  }
  return (
    <div>
    <div className="payment-page">
    <h1>Payment</h1>
    <p>Total Cost: ${totalPrice}</p>
    
      
        </div>
    <div className="payment-form">
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx" />
      </div>
      <div className="form-group">
        <label htmlFor="cardholderName">Cardholder Name</label>
        <input type="text" id="cardholderName" placeholder="Full Name" />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input type="text" id="expiryDate" placeholder="MM/YY" />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="123" />
        </div>
      </div>
      <button className="submit-btn">
        <Link to="/ThankYou">Pay Now</Link>
        </button>
    </div>
  </div>

  );
};


export default Checkout;
