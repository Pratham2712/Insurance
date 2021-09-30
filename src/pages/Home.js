import React from 'react';
import InitialPage from '../components/InitialPage';
import Products from '../components/Products';
import Advantages from '../components/Advantages';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Contact from '../components/contact';
import Parterns from '../components/Parterns';
//for scroll top
import ScrollTop from '../ScrollTop';
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
			<ScrollTop/>
		</main>
	);
};

export default Home;
