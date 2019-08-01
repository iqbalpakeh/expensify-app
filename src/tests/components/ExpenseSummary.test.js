import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";
import expenses from "../fixtures/expenses";

test("should render 2 expenses correctly", () => {
	const wrapper = shallow(
		<ExpenseSummary expenses={[expenses[0], expenses[1]]} />
	);
	expect(wrapper).toMatchSnapshot();
});

test("should render 1 expenses correctly", () => {
	const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]} />);
	expect(wrapper).toMatchSnapshot();
});
