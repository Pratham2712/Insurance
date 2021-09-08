import React from 'react';
import InitialPage from '../components/InitialPage';
import Products from '../components/Products';
import Advantages from '../components/Advantages';
import Benefits from '../components/Benefits';
const Home = () => {
	return (
		<main>
			<InitialPage />
			<Products />
			<Advantages />
			<Benefits />
		</main>
	);
};

export default Home;
