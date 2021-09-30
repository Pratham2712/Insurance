//Styles
import GlobalStyles from './GlobalStyles';
//import components
import Nav from './components/Nav';
import UpperNav from './components/UpperNav';
import Home from './pages/Home';
import Contact from './pages/ContactPage';
import Footer from './components/Footer';
//page animation
import { AnimatePresence } from 'framer-motion';
//Router
import { Switch, Route , useLocation } from 'react-router-dom';

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<GlobalStyles />
			<UpperNav />
			<Nav
			/>
			<AnimatePresence initial={false} exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
				<Route path="/" exact>
			        <Home />
			    </Route>
				<Route path="/contact">
			        <Contact />
			    </Route>
			</Switch>
			</AnimatePresence>
			<Footer/>
		</div>
	);
}

export default App;
