import React from 'react';
import Logo from '../assets/logo.png';
import Icon from '../assets/shopping.png';
import './header.css';
import { Link } from 'react-router-dom';

const Header = ({ itemsInCartCount }) => {

	return (
		<div className="header">
			<div className="logo">
				<img
					className="logo-img"
					src={Logo}
					alt="logo"
				/>
			</div>
			<ul className="nav">
				<li >
					<Link to="/" >Home</Link>
				</li>
				<li>
					<Link to="womens">Women</Link>
				</li>
				<li>
					<Link to="men">Men</Link>
				</li>
				<li>
					<Link to="childrens">Children</Link>
				</li>
				<li>
					<Link to="sunglasses">Sunglasses</Link>
				</li>
				<li>
					<Link to="contact-us">Contact Us</Link>
				</li>
			</ul>
			<div className="cart">
				<Link to="Cart">
					<img
						className="cart-img"
						src={Icon}
						alt="cart"
					/></Link>
			</div>
			<div className="cart-count" >{itemsInCartCount}</div>


		</div>
	);
};
export default Header;
