import { createStore, combineReducers } from "redux";

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
		text: rent,
		sortBy: "amount", // date or amount
		startDate: undefined,
		endDate: undefined
	}
};
