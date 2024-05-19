import React from 'react';
import { Card } from 'antd';
import Barchart from '../charts/barchart';
import Saleschart from '../charts/salesChart';
const { Meta } = Card;
const DashboardLowerCards = () => (
    <div style={{display : 'flex', gap : 20, height: '100%'}}>
  <Card
    title="Platform sales"
    style={{
      width: '100%',
      height: '44vh'
    }}
  >
    <Saleschart />
  </Card>
  <Card
    title="Top products"
    style={{
        width: '100%',
        height: '44vh'
    }}
  >
    <Barchart />
  </Card>
  <Card
    hoverable
    style={{
      width: 240,
      height: '100%'
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </div>
);
export default DashboardLowerCards;