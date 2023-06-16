import { useDispatch, useSelector } from 'react-redux';
import { add, edit } from '../features/prices/pricesSlice';
import { setId, setName, setPrice } from '../features/prices/pricesFormSlice';

export default function PricesForm() {
	const {id, name, price} = useSelector((state) => state.pricesForm.value)
	const dispatch = useDispatch()

	const onChangeName = (e) => {
		dispatch(setName(e.target.value))
	}

	const onChangePrice = (e) => {
		dispatch(setPrice(e.target.value))
	}

	const onSave = () => {
		dispatch(edit({
			id,
			name,
			price
		}))
		dispatch(setId(null))
		dispatch(setName(''))
		dispatch(setPrice(''))
	}

	const onCancel = () => {
		dispatch(setId(null))
		dispatch(setName(''))
		dispatch(setPrice(''))
	}

	return (
		<div className="prices-form">
			<input type="text" className="name" value={name}
				   onChange={onChangeName}/>
			<input type="number" className="price" value={price} min={0}
				   onChange={onChangePrice}/>
			{id ? (
				<>
					<button className="btn btn-save"
							onClick={onSave}>
						Сохранить
					</button>
					<button className="btn btn-cancel"
							onClick={onCancel}>
						Отменить
					</button>
				</>
			) : (
				<button className="btn btn-save"
						onClick={() => dispatch(add({name, price}))}>
					Добавить
				</button>
			)}
		</div>
	)
}
