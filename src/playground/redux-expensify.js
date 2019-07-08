import { createStore, combineReducers } from "redux";

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expense Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Filters Reducers

const filtersReducersDefaultState = {
	text: "",
	sortBy: "date", // date or amount
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducersDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Store creation

const store = createStore(
	combineReducers({
		expense: expensesReducer,
		filters: filtersReducer
	})
);

console.log(store.getState());

const demoState = {
	expense: [
		{
			id: "qwertylkjlkjp",
			description: "January rent",
			note: "This was the final payment for that address",
			amount: 54500, // in penny
			createdAt: 0
		}
	],
	filters: {
		text: "rent",
		sortBy: "amount", // date or amount
		startDate: undefined,
		endDate: undefined
	}
};
