import React from 'react';
import InitialPage from '../components/InitialPage';
import Products from '../components/Products';
import Advantages from '../components/Advantages';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Contact from '../components/contact';
import Parterns from '../components/Parterns';
const Home = () => {
	return (
		<main>
			<InitialPage />
			<Products />
			<Advantages />
			<About />
			<Benefits />
			<Parterns/>
			<Contact />
		</main>
	);
};

export default Home;
