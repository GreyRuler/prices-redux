import { useDispatch } from 'react-redux';
import { remove } from '../features/prices/pricesSlice';
import { setId, setName, setPrice } from '../features/prices/pricesFormSlice';

export default function PricesItem({item}) {
	const dispatch = useDispatch()

	const onEdit = () => {
		dispatch(setId(item.id))
		dispatch(setName(item.name))
		dispatch(setPrice(item.price))
	}

	const onRemove = () => {
		dispatch(remove(item.id))
		dispatch(setId(null))
		dispatch(setName(''))
		dispatch(setPrice(''))
	}

	return (
		<div className="prices-item">
			<span className="name">{item.name}</span>
			<span className="price">{item.price}</span>
			<button className="btn btn-edit"
					onClick={onEdit}>Редактировать</button>
			<button className="btn btn-remove"
					onClick={onRemove}>
				Удалить
			</button>
		</div>
	)
}
