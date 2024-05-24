import React from 'react'
import { Link } from 'react-router-dom';
import './ThankYou.css';


const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <div className="content">
        <h1>Thank You for Your Purchase!</h1>
        <p>Your order details have been sent to your email.</p>

        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>If you have any questions or requests, feel free to contact us:</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: support@example.com</p>
        </div>
        <button className="continue-shopping">
          <Link to="/">Continue Shopping</Link>
        </button>
      </div>
    </div>
  )
}

export default ThankYou
