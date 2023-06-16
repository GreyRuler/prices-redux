import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const pricesSlice = createSlice({
	name: 'prices',
	initialState: {
		value: [
			{
				id: nanoid(),
				name: 'content',
				price: 1000
			}
		]
	},
	reducers: {
		add: (state, action) => {
			state.value.push({
				id: nanoid(),
				...action.payload,
			})
		},
		edit: (state, action) => {
			const item = state.value.find((o) => o.id === action.payload.id)
			item.name = action.payload.name
			item.price = action.payload.price
		},
		remove: (state, action) => {
			state.value = state.value.filter((o) => o.id !== action.payload)
		},
	}
})

export const { add, edit, remove } = pricesSlice.actions

export default pricesSlice.reducer
