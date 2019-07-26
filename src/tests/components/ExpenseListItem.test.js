import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test("should render ExpenseListItem with expenses[0]", () => {
	const wrapper = shallow(<ExpenseListItem item={expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});
