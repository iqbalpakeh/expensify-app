import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from "../../actions/filters";

test("should setup setTextFilter action object with provided value", () => {
	const action = setTextFilter("Rent");
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: "Rent"
	});
});

test("should setup setTextFilter action object with default value", () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: ""
	});
});

test("should setup sortByDate action object", () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: "SORT_BY_DATE"
	});
});

test("should setup sortByAmount action object", () => {
	const action = sortByAmount();
	expect(action).toEqual({
		type: "SORT_BY_AMOUNT"
	});
});

test("should setup setStartDate action object", () => {
	const action = setStartDate(1000);
	expect(action).toEqual({
		type: "SET_START_DATE",
		startDate: 1000
	});
});

test("should setup setEndDate action object", () => {
	const action = setEndDate(1000);
	expect(action).toEqual({
		type: "SET_END_DATE",
		endDate: 1000
	});
});
