import moment from "moment";
import filterReducers from "../../reducers/filters";

test("should setup default filter values", () => {
	const state = filterReducers(undefined, { type: "@@INIT" });
	expect(state).toEqual({
		text: "",
		sortBy: "date",
		startDate: moment().startOf("month"),
		endDate: moment().endOf("month")
	});
});

test("should setup sortBy to amount", () => {
	const state = filterReducers(undefined, { type: "SORT_BY_AMOUNT" });
	expect(state.sortBy).toEqual("amount");
});

test("should setup sortBy to date", () => {
	const currentState = {
		text: "",
		startDate: undefined,
		endDate: undefined,
		sortBy: "amount"
	};
	const state = filterReducers(currentState, { type: "SORT_BY_DATE" });
	expect(state.sortBy).toEqual("date");
});

test("should setup text filter", () => {
	const state = filterReducers(undefined, {
		type: "SET_TEXT_FILTER",
		text: "rent"
	});
	expect(state.text).toEqual("rent");
});

test("should setup startDate filter", () => {
	const state = filterReducers(undefined, {
		type: "SET_START_DATE",
		startDate: 1000
	});
	expect(state.startDate).toEqual(1000);
});

test("should setup endDate filter", () => {
	const state = filterReducers(undefined, {
		type: "SET_END_DATE",
		endDate: 1000
	});
	expect(state.endDate).toEqual(1000);
});
