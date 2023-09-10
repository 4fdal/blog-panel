import React from "react";
import { ConfigProvider } from "antd";

import theme from "../theme/themeConfig";

const Dashboard: React.FC = () => {
  return <ConfigProvider theme={theme}></ConfigProvider>;
};

export default Dashboard;
