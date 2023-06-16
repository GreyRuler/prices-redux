import { useSelector } from 'react-redux';
import PricesItem from './PricesItem';

export default function PricesList() {
	const prices = useSelector((state) => state.prices.value)
	const filter = useSelector((state) => state.filter.value)
	const filteredPrices = filter ? prices.filter((o) => o.name.includes(filter)) : prices
	return (
		<div className="prices-list">
			{filteredPrices.map((o) => (
				<PricesItem key={o.id} item={o}/>
			))}
		</div>
	)
}
