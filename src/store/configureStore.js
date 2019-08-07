import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

// -------------------------------------------------
// STORE CREATION
// -------------------------------------------------

const composeEnhanchers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer,
			auth: authReducer
		}),
		composeEnhanchers(applyMiddleware(thunk))
	);
	return store;
};
