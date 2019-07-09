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

const removeExpense = ({ id }) => ({
	type: "REMOVE_EXPENSE",
	id
});

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

// 	handleDeleteOption = optionToRemove => {
// 	this.setState(prevState => ({
// 		options: prevState.options.filter(option => optionToRemove !== option)
// 	}));
// };

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case "ADD_EXPENSE":
			return [...state, action.expense];
		case "REMOVE_EXPENSE":
			return state.filter(expense => {
				return expense.id !== action.id;
			});
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

const expenseOne = store.dispatch(
	addExpense({ description: "rent", amount: 100 })
);

const expenseTwo = store.dispatch(
	addExpense({ description: "coffee", amount: 300 })
);

store.dispatch(removeExpense({ id: expenseTwo.expense.id }));

// console.log(expenseTwo);

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
