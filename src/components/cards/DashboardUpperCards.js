import React from "react";
import { Card, Col, Row } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const DashboardUpperCards = (data) => {
  const { data: dashboardData } = data;

  return (
    <Row gutter={16} wrap>
      <Col span={8}>
        <Card title="Product viewed">
          <span style={{ fontSize: 28, paddingRight: 20 }}>
            {dashboardData?.totalViewed}
          </span>
          <CaretUpOutlined />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Product checked-out">
          <span style={{ fontSize: 28, paddingRight: 20 }}>
            {dashboardData?.totalPurchased}
          </span>
          <CaretUpOutlined />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Product re-ordered">
          <span style={{ fontSize: 28, paddingRight: 20 }}>
            {dashboardData?.totalReOrdered}
          </span>
          <CaretUpOutlined />
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardUpperCards;
