import database from "../firebase/firebase";

// -------------------------------------------------
// Before firebase integration:
// 1. Action generator returns object
// 2. Component dispatches object
// 3. Redux store changes
//
// After firebase integration:
// 1. Action generator returns function
// 2. Component dispatches function (?)
// 3. Function runs (has the ability to dispatch other actions and do whatever it wants)
//
// -------------------------------------------------

// -------------------------------------------------
// ACTION ADD_EXPENSE
// -------------------------------------------------

export const addExpense = expense => ({
	type: "ADD_EXPENSE",
	expense
});

export const startAddExpense = (expenseData = {}) => {
	return dispatch => {
		const {
			description = "",
			note = "",
			amount = 0,
			createdAt = 0
		} = expenseData;
		const expense = { description, note, amount, createdAt };
		return database
			.ref("expenses")
			.push(expense)
			.then(ref => {
				dispatch(
					addExpense({
						id: ref.key,
						...expense
					})
				);
			});
	};
};

// -------------------------------------------------
// ACTION REMOVE_EXPENSE
// -------------------------------------------------

export const removeExpense = ({ id } = {}) => ({
	type: "REMOVE_EXPENSE",
	id
});

// -------------------------------------------------
// ACTION EDIT_EXPENSE
// -------------------------------------------------

export const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates
});

// -------------------------------------------------
// ACTION SET_EXPENSES
// -------------------------------------------------

export const setExpenses = expenses => ({
	type: "SET_EXPENSES",
	expenses
});

export const startSetExpenses = () => {
	return dispatch => {
		// 1. Fetch all expense data once
		return database
			.ref("expenses")
			.once("value")
			.then(snapshot => {
				// 2. Parse that data into an array
				const expenses = [];
				snapshot.forEach(childSnapshot => {
					expenses.push({
						id: childSnapshot.key,
						...childSnapshot.val()
					});
				});
				// 3. Dispatch SET_EXPENSES
				dispatch(setExpenses(expenses));
			});
	};
};
