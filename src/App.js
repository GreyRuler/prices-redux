import './App.css'
import './assets/css/google-icons.css'
import PricesList from './components/PricesList';
import PricesForm from './components/PricesForm';
import PricesFilter from './components/PricesFilter';

function App() {
	return (
		<div className='app'>
			<PricesFilter/>
			<PricesForm/>
			<PricesList/>
		</div>
	);
}

export default App;
