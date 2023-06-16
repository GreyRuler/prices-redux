import { useDispatch } from 'react-redux';
import { setFilter } from '../features/prices/filterSlice';

export default function PricesFilter() {
	const dispatch = useDispatch()

	return (
		<div className="filter">
			<span className='title'>Фильтр</span>
			<input type="text"
				   onChange={(e) => dispatch(setFilter(e.target.value))}/>
		</div>
	)
}
