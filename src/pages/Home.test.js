import React from "react";
import Home from "./Home";
import { shallow } from "enzyme";

describe("Home page", () => {
  const getWrapper = () => shallow(<Home />);

  test("should render a info text", () => {
    const wrapper = getWrapper();
    expect(wrapper.find(".home-msg").text()).toBe(
      "select a friend to start a call"
    );
  });
});
