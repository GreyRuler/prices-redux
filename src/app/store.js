import { configureStore } from '@reduxjs/toolkit'
import pricesReducer from '../features/prices/pricesSlice'
import pricesFormReducer from '../features/prices/pricesFormSlice'
import filterReducer from '../features/prices/filterSlice';
import { composeWithDevTools } from '@redux-devtools/extension';

export default configureStore({
	reducer: {
		prices: pricesReducer,
		pricesForm: pricesFormReducer,
		filter: filterReducer,
	},
	// devTools: true
})
