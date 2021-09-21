import React from 'react';
import InitialPage from '../components/InitialPage';
import Products from '../components/Products';
import Advantages from '../components/Advantages';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Contact from '../components/contact';
import Footer from '../components/Footer';
const Home = () => {
	return (
		<main>
			<InitialPage />
			<Products />
			<Advantages />
			<About />
			<Benefits />
			<Contact />
			<Footer />
		</main>
	);
};

export default Home;
