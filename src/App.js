import Nav from './components/Nav';
import GlobalStyles from './GlobalStyles';
import UpperNav from './components/UpperNav';
import Home from './pages/Home';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<UpperNav />
			<Nav />
			<Home />
		</div>
	);
}

export default App;
