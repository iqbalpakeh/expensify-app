import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";

// -------------------------------------------------
//
// IMPROVEMENT LIST:
//
// 1. Add custom currency
// 2. Add reporting expense -> pdf
// 3. Add confirmation when user want to delete expense
// 4. Show note if any
// 5. Number of hidden expense on dashboard
// 6. Add another social login
// 7. Create custom domain
// 8. Create android apps for expensify
// -------------------------------------------------

const store = configureStore();
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById("app"));
		hasRendered = true;
	}
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
	if (user) {
		console.log("Log in, uid:", user.uid);
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() => {
			renderApp();
			if (history.location.pathname === "/") {
				history.push("/dashboard");
			}
		});
	} else {
		console.log("Log out");
		store.dispatch(logout());
		renderApp();
		history.push("/");
	}
});
