import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Saleschart = ({ salesData }) => {
  return (
    <AreaChart
      width={500}
      height={270}
      data={salesData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPurchased" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorReOrdered" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="price"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorPrice)"
      />
      <Area
        type="monotone"
        dataKey="purchased"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPurchased)"
      />
      <Area
        type="monotone"
        dataKey="reOrdered"
        stroke="#ffc658"
        fillOpacity={1}
        fill="url(#colorReOrdered)"
      />
    </AreaChart>
  );
};

export default Saleschart;
