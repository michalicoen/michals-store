import './App.css';
import Header from './components/SiteHeader';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import Womens from './pages/Womens';
import Men from './pages/Men';
import Childrens from './pages/Childrens';
import Sunglasses from './pages/Sunglasses';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { data } from './data';

function getItemsAsArrayWithId(items) {
	const itemsEntries = Object.entries(items);

	const itemsArrayWithId = itemsEntries.map((entry) => {
		return {
			id: entry[0],
			...entry[1],
		};
	});

	return itemsArrayWithId;
}

function getItemById(id) {
	return (
		data?.sunglassesItems?.[id] ||
		data?.childrenItems?.[id] ||
		data?.menItems?.[id] ||
		data?.womenItems?.[id]
	);
}

function getItemsByIds(ids) {
	const items = [];

	ids.forEach((id) => {
		items.push({
			...getItemById(id),
			id,
		});
	});

	return items;
}

function App() {
	const cartItemsIds = useSelector((state) => state.cartItemsIds);
	const cartItemsCount = useSelector((state) => state.cartItemsCount);
	const itemsInCartCount = cartItemsIds.length;

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
					element={<Womens items={getItemsAsArrayWithId(data.womenItems)} />}
				/>
				<Route
					path="contact-us"
					element={<ContactUs />}
				/>
				<Route
					path="men"
					element={<Men items={getItemsAsArrayWithId(data.menItems)} />}
				/>
				<Route
					path="childrens"
					element={
						<Childrens items={getItemsAsArrayWithId(data.childrenItems)} />
					}
				/>
				<Route
					path="sunglasses"
					element={
						<Sunglasses items={getItemsAsArrayWithId(data.sunglassesItems)} />
					}
				/>
				<Route
					path="product/:id"
					element={<Product getItemById={getItemById} />}
				/>
				<Route
					path="cart"
					element={
						<Cart
							items={getItemsByIds(cartItemsIds)}
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
