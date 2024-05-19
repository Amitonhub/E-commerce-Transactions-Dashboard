// import * as d3 from "d3";
// import { useEffect, useRef } from "react";

// const Barchart = () => {
//   const ref = useRef();

//   useEffect(() => {
//     // set the dimensions and margins of the graph
//     const margin = { top: 30, right: 30, bottom: 70, left: 60 },
//       width = 450 - margin.left - margin.right,
//       height = 250 - margin.top - margin.bottom;

//     // append the svg object to the body of the page
//     const svg = d3
//       .select(ref.current)
//       .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left},${margin.top})`);

//     // Parse the Data
//     d3.csv(
//       "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv"
//     ).then(function (data) {
//       // X axis
//       const x = d3
//         .scaleBand()
//         .range([0, width])
//         .domain(data.map((d) => d.Country))
//         .padding(0.2);
//       svg
//         .append("g")
//         .attr("transform", `translate(0, ${height})`)
//         .call(d3.axisBottom(x))
//         .selectAll("text")
//         .attr("transform", "translate(-10,0)rotate(-45)")
//         .style("text-anchor", "end");

//       // Add Y axis
//       const y = d3.scaleLinear().domain([0, 13000]).range([height, 0]);
//       svg.append("g").call(d3.axisLeft(y));

//       // Bars
//       svg
//         .selectAll("mybar")
//         .data(data)
//         .join("rect")
//         .attr("x", (d) => x(d.Country))
//         .attr("y", (d) => y(d.Value))
//         .attr("width", x.bandwidth())
//         .attr("height", (d) => height - y(d.Value))
//         .attr("fill", "#5f0f40");
//     });
//   }, []);

//   return <svg width={'100%'} height={'100%'} id="barchart" ref={ref} />;
// };

// export default Barchart;

// Filename - App.js

import React from "react";
import {
	BarChart,
	Bar,
	CartesianGrid,
	XAxis,
	YAxis,
  FunnelChart,
  Tooltip,
  Funnel,
  LabelList,
  AreaChart,
  Area,
} from "recharts";

const Saleschart = () => {
	// Sample data
	const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

	return (
		<AreaChart width={500} height={270} data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
	);
};

export default Saleschart;
