// -------------------------------------------------
// UTIL FUNCTION: CALCULATE TOTAL EXPENSES
// -------------------------------------------------

export default expenses =>
	expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0);
