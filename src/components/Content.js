import React, { useMemo, useCallback } from "react";
import { Layout } from "antd";

import "./Content.css";

const { Content: ContentAnd } = Layout;

function Content({ children, isDrawerOpen, handleDrawer }) {
  const getOverlayClass = useMemo(() => (isDrawerOpen ? "overlay" : ""), [
    isDrawerOpen
  ]);

  const handleClick = useCallback(() => {
    if (isDrawerOpen) {
      handleDrawer();
    }
  }, [isDrawerOpen, handleDrawer]);

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
