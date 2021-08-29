import Nav from './components/Nav';
import GlobalStyles from './GlobalStyles';
import InitialPage from './components/InitialPage';
import Products from './components/Products';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Nav />
			<InitialPage />
			<Products />
		</div>
	);
}

export default App;
