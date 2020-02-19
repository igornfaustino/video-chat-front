import React from "react";
import Sider from "./Sider";
import { shallow } from "enzyme";

const friends = [
  { name: "Igor Faustino" },
  { name: "Joao Pedro" },
  { name: "Guilherme Ribeiro" }
];

describe("Test Sider component", () => {
  const getWrapper = props => shallow(<Sider {...props} />);

  test("render friend list", () => {
    const wrapper = getWrapper({ friends });
    const friendList = wrapper.find("#friend-list");
    expect(friendList).toHaveLength(1);
  });

  test("render friends", () => {
    const wrapper = getWrapper({ friends });
    expect(wrapper.find("#friend-list").children()).toHaveLength(
      friends.length
    );
  });
});
