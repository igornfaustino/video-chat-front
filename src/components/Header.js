import React, { useMemo } from "react";
import { Layout, Icon } from "antd";

import "./Header.css";

const { Header: AntdHeader } = Layout;

function Header({ isHandleDrawerVisible, handleDrawer, isDrawerOpen }) {
  const renderHandleMenuBtn = useMemo(
    () =>
      isHandleDrawerVisible && (
        <Icon
          id="handle-drawer-btn"
          onClick={handleDrawer}
          className="trigger"
          type={isDrawerOpen ? "menu-unfold" : "menu-fold"}
        />
      ),
    [isHandleDrawerVisible, handleDrawer, isDrawerOpen]
  );

  return (
    <AntdHeader className="header">
      {renderHandleMenuBtn}
      <div className="logo">Awesome Video App</div>
    </AntdHeader>
  );
}

export default Header;
