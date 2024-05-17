import React from 'react';
import { Card, Col, Row } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

const DashboardUpperCards = () => (
  <Row gutter={16} wrap>
    <Col span={5}>
      <Card title="Product viewed">
        <span style={{fontSize : 28, paddingRight: 20}}>411.9K</span><CaretUpOutlined />
      </Card>
    </Col>
    <Col span={5}>
      <Card title="Product shared">
        <span style={{fontSize : 28, paddingRight: 20}}>411.9K</span><CaretDownOutlined />
      </Card>
    </Col>
    <Col span={5}>
      <Card title="Product added to cart">
        <span style={{fontSize : 28, paddingRight: 20}}>411.9K</span><CaretDownOutlined />
      </Card>
    </Col>
    <Col span={5}>
      <Card title="Product checked-out">
        <span style={{fontSize : 28, paddingRight: 20}}>411.9K</span><CaretUpOutlined />
      </Card>
    </Col>
    <Col span={4}>
      <Card title="Product re-ordered">
      <span style={{fontSize : 28, paddingRight: 20}}>411.9K</span><CaretUpOutlined />
      </Card>
    </Col>
  </Row>
);

export default DashboardUpperCards;