import React, { useMemo, useCallback } from "react";
import { Layout } from "antd";

import "./Content.css";

const { Content: ContentAnd } = Layout;

function Content({ children, isHandleDrawerVisible, handleDrawer }) {
  const getOverlayClass = useMemo(
    () => (isHandleDrawerVisible ? "overlay" : ""),
    [isHandleDrawerVisible]
  );

  const handleClick = useCallback(() => {
    if (isHandleDrawerVisible) {
      handleDrawer();
    }
  }, [isHandleDrawerVisible, handleDrawer]);

  return (
    <ContentAnd id="main-content">
      <div
        id="content-wrapper"
        className={getOverlayClass}
        onClick={handleClick}
      >
        {children}
      </div>
    </ContentAnd>
  );
}

export default Content;
