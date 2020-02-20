import React, { useState, useEffect, useCallback } from "react";
import { Layout } from "antd";
import useWindowSize from "./hooks/useWindow";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Sider from "./components/Sider";
import Home from "./pages/Home";

const friends = [
  { name: "Igor Faustino" },
  { name: "Joao Pedro" },
  { name: "Guilherme Ribeiro Cunha" }
];

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [collapsible, setCollapsible] = useState(true);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.innerWidth <= 768) {
      setCollapsed(true);
      setCollapsible(true);
    } else {
      setCollapsed(false);
      setCollapsible(false);
    }
  }, [windowSize, windowSize.innerWidth]);

  const handleDrawer = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  return (
    <Layout className="app">
      <Header
        isHandleDrawerVisible={collapsible}
        handleDrawer={handleDrawer}
        isDrawerOpen={!collapsed}
      />
      <Layout>
        <Sider
          collapsed={collapsed}
          collapsible={collapsible}
          friends={friends}
        />
        <Content
          isDrawerOpen={collapsible && !collapsed}
          handleDrawer={handleDrawer}
        >
          <Home />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
