import React from "react";
import { Layout, theme } from "antd";
import Navbar from "../components/sidebar";
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
          }}
        >
          Dashboard
        </div>
      </Content>
    </Layout>
  );
};
export default Dashboard;
