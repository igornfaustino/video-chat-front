import React from "react";
import App from "./App";
import { shallow } from "enzyme";

const resizeWindow = x => {
  window.innerWidth = x;
  window.dispatchEvent(new Event("resize"));
};

describe("<App/> : Main layout", () => {
  const getWrapper = () => shallow(<App />);

  afterEach(() => {
    resizeWindow(1024);
  });

  test("should render the page header", () => {
    const wrapper = getWrapper();
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  test("Should render a sider element", () => {
    const wrapper = getWrapper();
    expect(wrapper.find("Sider")).toHaveLength(1);
  });

  test("should render the main content area", () => {
    const wrapper = getWrapper();
    expect(wrapper.find("Content")).toHaveLength(1);
  });
});
