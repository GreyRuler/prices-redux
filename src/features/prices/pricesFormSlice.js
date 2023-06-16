import { createSlice } from '@reduxjs/toolkit';

export const pricesFormSlice = createSlice({
	name: 'pricesForm',
	initialState: {
		value: {
			id: null,
			name: '',
			price: '',
		}
	},
	reducers: {
		setId: (state, action) => {
			state.value.id = action.payload
		},
		setName: (state, action) => {
			state.value.name = action.payload
		},
		setPrice: (state, action) => {
			state.value.price = action.payload
		},
	}
})

export const { setId, setName, setPrice } = pricesFormSlice.actions

export default pricesFormSlice.reducer
