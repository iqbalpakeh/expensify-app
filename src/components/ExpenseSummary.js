import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import getTotalExpense from "../selectors/expenses-total";

export const ExpenseSummary = props => {
	const amount = getTotalExpense(props.expenses);
	const formattedAmount = numeral(amount / 100).format("$0,0.00");
	return (
		<div>
			<p>
				Viewing {props.expenses.length} totaling {formattedAmount}
			</p>
		</div>
	);
};

const mapStateToProps = state => ({
	expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseSummary);
