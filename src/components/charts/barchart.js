import React from "react";
import { FunnelChart, Tooltip, Funnel, LabelList } from "recharts";

const Barchart = ({ salesData }) => {
  // Sort salesData based on reOrdered value in descending order
  const sortedSalesData = salesData && [...salesData].sort(
    (a, b) => b.reOrdered - a.reOrdered
  );

  // Generate random color for each product
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Create a new array of objects with the fill property added
  const coloredSalesData = sortedSalesData && sortedSalesData.map((product) => ({
    ...product,
    fill: getRandomColor()
  }));

  return (
    <FunnelChart width={500} height={270}>
      <Tooltip />
      <Funnel dataKey="reOrdered" data={coloredSalesData} isAnimationActive>
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
      </Funnel>
    </FunnelChart>
  );
};

export default Barchart;
