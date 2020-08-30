import React from "react";
import Component from "./Component";
import { shallow } from "enzyme";

describe("Counter Testing", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Component />);
    });

    test("renders learn react link", () => {
        expect(wrapper.find("h1").text()).toContain("Testing sucks");
    });

    test('render a button with text of "increament"', () => {
        expect(wrapper.find("#button").text()).toBe("Click Me");
    });

    test("render the initial value of state in a div", () => {
        expect(wrapper.find("#counter-value").text()).toBe("0");
    });

    test("render the click event of incerement button and increment couter value", () => {
        wrapper.find("#button").simulate("click");
        expect(wrapper.find("#counter-value").text()).toBe("1");
    });
});
