import React from "react";
import FriendItem from "./FriendItem";
import { shallow } from "enzyme";

describe("Test FriendItem component", () => {
  const getWrapper = props => shallow(<FriendItem {...props} />);

  test("render friend", () => {
    const wrapper = getWrapper({ children: "Igor Faustino" });
    expect(wrapper.find("Avatar")).toHaveLength(1);
    expect(wrapper.find("span").text()).toBe("Igor Faustino");
  });
});
