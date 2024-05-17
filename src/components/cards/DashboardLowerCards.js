import React from 'react';
import { Card } from 'antd';
import Barchart from '../charts/barchart';
const { Meta } = Card;
const DashboardLowerCards = () => (
    <div style={{display : 'flex', gap : 20, height: '100%'}}>
  <Card
    title="Platform view"
    style={{
      width: '100%',
    }}
  >
    <Barchart />
  </Card>
  <Card
    title="Total revenue"
    style={{
        width: '100%',
    }}
  >
    <Barchart />
  </Card>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </div>
);
export default DashboardLowerCards;