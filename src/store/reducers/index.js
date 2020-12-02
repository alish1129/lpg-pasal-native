import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import productReducer from './product.reducer';
import categoryReducer from './category.reducer';
import persistReducer from 'redux-persist/es/persistReducer';
import utilsReducer from './utils.reducer';
import authReducer from './auth.reducer';

const persistConfig = {
	// Root
	key: 'root',
	// Storage Method (React Native)
	storage: AsyncStorage,
	// Whitelist (Save Specific Reducers)
	whitelist: [ 'auth', 'products', 'categories' ]
};

const rootReducer = combineReducers({
	products: productReducer,
	categories: categoryReducer,
	utils: utilsReducer,
	auth: authReducer
});
// Exports
export default persistReducer(persistConfig, rootReducer);
