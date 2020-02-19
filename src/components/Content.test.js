import React from "react";
import Content from "./Content";
import { shallow } from "enzyme";

describe("Test content render", () => {
  const getWrapper = ({ children, ...props }) =>
    shallow(<Content {...props}>{children}</Content>);

  test("Should render the chield object", () => {
    const wrapper = getWrapper({
      children: <div id="test">Content</div>
    });

    expect(wrapper.find("#test").text()).toBe("Content");
  });
});

describe("Test container overlay when drawer is open", () => {
  const getWrapper = props => shallow(<Content {...props} />);

  test("should not render render a overlay div when the drawer is not open", () => {
    const wrapper = getWrapper();
    expect(wrapper.find("#content-wrapper").prop("className")).not.toContain(
      "overlay"
    );
  });

  test("should render render a overlay div when the drawer is open", () => {
    const wrapper = getWrapper({ isDrawerOpen: true });
    expect(wrapper.find("#content-wrapper").prop("className")).toContain(
      "overlay"
    );
  });

  test("should have a onClick function and should be called when drawer is open", () => {
    const handleDrawerMock = jest.fn();
    const wrapper = getWrapper({
      isDrawerOpen: true,
      handleDrawer: handleDrawerMock
    });
    wrapper.find("#content-wrapper").simulate("click");
    expect(handleDrawerMock).toHaveBeenCalled();
  });

  test("should have a onClick function and NOT should be called when drawer is CLOSE", () => {
    const handleDrawerMock = jest.fn();
    const wrapper = getWrapper({
      isDrawerOpen: false,
      handleDrawer: handleDrawerMock
    });
    wrapper.find("#content-wrapper").simulate("click");
    expect(handleDrawerMock).not.toHaveBeenCalled();
  });
});
