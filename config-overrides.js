const { override, fixBabelImports, addLessLoader } = require("customize-cra");

const primaryColor = "#37853A";
const backgroundColor = "#353942";

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": primaryColor,
      "@menu-dark-bg": backgroundColor,
      "@layout-sider-background": backgroundColor
    }
  })
);
