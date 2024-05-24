import './App.css';
import Header from './components/SiteHeader';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import WomensPage from './pages/Womens';
import MenPage from './pages/Men';
import ChildrensPage from './pages/Childrens';
import SunglassesPage from './pages/Sunglasses';
import ProductPage from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchData } from './fetchData';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader';

function withLoader(Comonent) {
	return ({ data, ...rest }) => {
		return data ? <Comonent data={data} {...rest} /> : <Loader />;
	};
}

const Product = withLoader(ProductPage);
const Womens = withLoader(WomensPage);
const Men = withLoader(MenPage);
const Childrens = withLoader(ChildrensPage);
const Sunglasses = withLoader(SunglassesPage);

function getItemsAsArrayWithId(items) {
	if (!items) {
		return [];
	}
	const itemsEntries = Object.entries(items);

	const itemsArrayWithId = itemsEntries.map((entry) => {
		return {
			id: entry[0],
			...entry[1],
		};
	});

	return itemsArrayWithId;
}

function getItemById(data, id) {
	return (
		data?.sunglassesItems?.[id] ||
		data?.childrenItems?.[id] ||
		data?.menItems?.[id] ||
		data?.womenItems?.[id]
	);
}

function getItemsByIds(data, ids) {
	const items = [];

	ids.forEach((id) => {
		items.push({
			...getItemById(data, id),
			id,
		});
	});

	return items;
}

function App() {
	const cartItemsIds = useSelector((state) => state.cartItemsIds);
	const cartItemsCount = useSelector((state) => state.cartItemsCount);
	const itemsInCartCount = cartItemsIds.length;

	const [data, setData] = useState();

	useEffect(() => {
		fetchData().then((data) => {
			setData(data);
		});
	}, []);

	return (
		<div className="App">
			<Header itemsInCartCount={itemsInCartCount} />
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="womens"
					element={<Womens data={data} items={getItemsAsArrayWithId(data?.womenItems)} />}
				/>
				<Route
					path="contact-us"
					element={<ContactUs />}
				/>
				<Route
					path="men"
					element={<Men data={data} items={getItemsAsArrayWithId(data?.menItems)} />}
				/>
				<Route
					path="childrens"
					element={
						<Childrens data={data} items={getItemsAsArrayWithId(data?.childrenItems)} />
					}
				/>
				<Route
					path="sunglasses"
					element={
						<Sunglasses data={data} items={getItemsAsArrayWithId(data?.sunglassesItems)} />
					}
				/>
				<Route
					path="product/:id"
					element={<Product data={data} getItemById={(id) => getItemById(data, id)} />}
				/>
				<Route
					path="cart"
					element={
						<Cart
							items={getItemsByIds(data, cartItemsIds)}
							cartItemsCount={cartItemsCount}
						/>
					}
				/>
				<Route
					path="checkout"
					element={<Checkout />}
				/>
				<Route
					path="ThankYou"
					element={<ThankYou />}
				/>
			</Routes>
		</div>
	);
}

export default App;
