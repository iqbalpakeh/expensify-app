import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// -------------------------------------------------
// ADD_EXPENSE
// -------------------------------------------------

const addExpense = ({
	description = "",
	note = "",
	amount = 0,
	createdAt = 0
} = {}) => ({
	type: "ADD_EXPENSE",
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});
// -------------------------------------------------
// REMOVE_EXPENSE
// -------------------------------------------------

// -------------------------------------------------
// EDIT_EXPENSE
// -------------------------------------------------

// -------------------------------------------------
// SET_TEXT_FILTER
// -------------------------------------------------

// -------------------------------------------------
// SORT_BY_DATE
// -------------------------------------------------

// -------------------------------------------------
// SORT_BY_AMOUNT
// -------------------------------------------------

// -------------------------------------------------
// SET_START_DATE
// -------------------------------------------------

// -------------------------------------------------
// SET_END_DATE
// -------------------------------------------------

// -------------------------------------------------
// EXPENSE REDUCER
// -------------------------------------------------

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case "ADD_EXPENSE":
			return state.concat(action.expense);
		default:
			return state;
	}
};

// -------------------------------------------------
// FILTER REDUCER
// -------------------------------------------------

const filtersReducerDefaultState = {
	text: "",
	sortBy: "date", // date or amount
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// -------------------------------------------------
// STORE CREATION
// -------------------------------------------------

const store = createStore(
	combineReducers({
		expense: expensesReducer,
		filters: filtersReducer
	})
);

store.subscribe(() => {
	console.log(store.getState());
});

// -------------------------------------------------
// MAIN()
// -------------------------------------------------

store.dispatch(addExpense({ description: "rent", amount: 100 }));

// -------------------------------------------------
// DUMMY DATA
// -------------------------------------------------

const demoState = {
	expense: [
		{
			id: "qwertylkjlkjp",
			description: "January rent",
			note: "This was the final payment for that address",
			amount: 54500, // in penny to avoid comma operation
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
