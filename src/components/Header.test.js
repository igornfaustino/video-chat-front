import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("<Header/> works properly", () => {
  const getWrapper = props => shallow(<Header {...props} />);

  test("Render a open drawer menu", () => {
    const wrapper = getWrapper({ isHandleDrawerVisible: true });
    expect(wrapper.find("#handle-drawer-btn")).toHaveLength(1);
  });

  test("Test click event on the drawer handle btn", () => {
    const handleDrawerMock = jest.fn();
    const wrapper = getWrapper({
      isHandleDrawerVisible: true,
      handleDrawer: handleDrawerMock
    });
    wrapper.find("#handle-drawer-btn").simulate("click");
    expect(handleDrawerMock).toHaveBeenCalled();
  });
});
