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
