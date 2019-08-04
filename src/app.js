import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";

// debug import
import { startAddExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
// import "./playground/promises";

const store = configureStore();

// debug code
store.dispatch(startAddExpense({ description: "Water bill", amount: 4500 }));
store.dispatch(startAddExpense({ description: "Gas bill", createdAt: 1000 }));
store.dispatch(startAddExpense({ description: "Rent", amount: 109500 }));
const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
