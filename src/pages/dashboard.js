import React from "react";
import { Layout, theme } from "antd";
import Navbar from "../components/sidebar";
import DashboardUpperCards from "../components/cards/DashboardUpperCards";
import DashboardLowerCards from "../components/cards/DashboardLowerCards";
const { Content } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{backgroundColor: '#E8E7EE'}}>
      <Navbar />
      <Content
        style={{
          padding: "22px",
          height: "88vh",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: '82vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: "100%",
            display: 'flex',
            gap: 20,
            flexDirection: 'column'
          }}
        >
          <DashboardUpperCards />
          <DashboardLowerCards />
        </div>
      </Content>
    </Layout>
  );
};
export default Dashboard;
