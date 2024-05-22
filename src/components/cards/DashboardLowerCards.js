import React from 'react';
import { Card } from 'antd';
import Barchart from '../charts/barchart';
import Saleschart from '../charts/salesChart';
const { Meta } = Card;
const DashboardLowerCards = (data) => {
  const {data: salesData} = data
  return (
    <div style={{display : 'flex', gap : 20, height: '100%'}}>
  <Card
    title="Platform sales"
    style={{
      width: '100%',
      height: '44vh'
    }}
  >
    <Saleschart salesData={salesData && salesData.salesData}/>
  </Card>
  <Card
    title="Top products"
    style={{
        width: '100%',
        height: '44vh'
    }}
  >
    <Barchart salesData={salesData && salesData.salesData}/>
  </Card>
  <Card
    hoverable
    style={{
      width: '30rem',
      height: '100%'
    }}
    cover={<img alt="example" src={salesData?.bestProduct?.image} />}
  >
    <Meta title={salesData?.bestProduct?.name} description={`sales: ${salesData?.bestProduct?.reOrdered}`} />
  </Card>
  </div>
)};
export default DashboardLowerCards;