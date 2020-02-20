import React, { useMemo } from "react";
import { Layout, Menu } from "antd";
import FriendItem from "./FriendItem";

import "./Sider.css";

const { Sider: SiderAnt } = Layout;

function Sider({ friends = [], collapsed, collapsible }) {
  const renderFriends = useMemo(
    () =>
      friends.map((friend, idx) => (
        <Menu.Item key={idx}>
          <FriendItem>{friend.name}</FriendItem>
        </Menu.Item>
      )),
    [friends]
  );

  return (
    <SiderAnt
      className="sider"
      width={200}
      collapsed={collapsed}
      collapsible={collapsible}
      collapsedWidth={0}
      trigger={null}
    >
      <Menu id="friend-list" theme="dark">
        {renderFriends}
      </Menu>
    </SiderAnt>
  );
}

export default Sider;
