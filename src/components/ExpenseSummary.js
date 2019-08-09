import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import getTotalExpense from "../selectors/expenses-total";

export const ExpenseSummary = props => {
	const amount = getTotalExpense(props.expenses);
	const formattedAmount = numeral(amount / 100).format("$0,0.00");
	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">
					Viewing <span>{props.expenses.length}</span> totaling{" "}
					<span>{formattedAmount}</span>
				</h1>
				<div className="page-header__actions">
					<Link className="button" to="/create">
						Add Expense
					</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseSummary);
