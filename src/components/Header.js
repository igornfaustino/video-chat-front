import React, { useMemo } from "react";
import { Layout } from "antd";

const { Header: AntdHeader } = Layout;

function Header({ isHandleDrawerVisible, handleDrawer }) {
  const renderHandleMenuBtn = useMemo(
    () =>
      isHandleDrawerVisible && (
        <button id="handle-drawer-btn" onClick={handleDrawer}>
          Menu
        </button>
      ),
    [isHandleDrawerVisible, handleDrawer]
  );

  return <AntdHeader className="header">{renderHandleMenuBtn}</AntdHeader>;
}

export default Header;
