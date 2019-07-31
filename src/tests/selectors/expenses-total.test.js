import getTotalExpenses from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expense", () => {
	const total = getTotalExpenses([]);
	expect(total).toBe(0);
});

test("should correctly add up a single expenses", () => {
	const total = getTotalExpenses([expenses[1]]);
	expect(total).toBe(expenses[1].amount);
});

test("should correctly add up multiple expenses", () => {
	const total = getTotalExpenses(expenses);
	expect(total).toBe(114195);
});
