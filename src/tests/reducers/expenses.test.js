import expensesReducers from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
	const state = expensesReducers(undefined, { type: "@@INIT" });
	expect(state).toEqual([]);
});

test("should remove expense by id", () => {
	const action = {
		type: "REMOVE_EXPENSE",
		id: expenses[1].id
	};
	const state = expensesReducers(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
	const action = {
		type: "REMOVE_EXPENSE",
		id: -1
	};
	const state = expensesReducers(expenses, action);
	expect(state).toEqual(expenses);
});

test("should add an expense", () => {
	const action = {
		type: "ADD_EXPENSE",
		expense: {
			id: 4,
			description: "new expense",
			note: "new note",
			amount: 1000,
			createdAt: 1000
		}
	};
	const state = expensesReducers(expenses, action);
	expect(state).toEqual([...expenses, action.expense]);
});

test("should edit and expense", () => {
	const action = {
		type: "EDIT_EXPENSE",
		id: "1",
		updates: {
			description: "new description"
		}
	};
	const state = expensesReducers(expenses, action);
	expect(state).toEqual([
		{
			id: "1",
			description: "new description",
			note: "",
			amount: 195,
			createdAt: 0
		},
		expenses[1],
		expenses[2]
	]);
});

test("should not edit expense if id not exist", () => {
	const action = {
		type: "EDIT_EXPENSE",
		id: 3,
		updates: {}
	};
	const state = expensesReducers(expenses, action);
	expect(state).toEqual(expenses);
});
