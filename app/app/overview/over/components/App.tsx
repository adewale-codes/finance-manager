"use client"
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Months", "ThisWeek", "LastWeek"],
  ["17 Sun", 1000, 400],
  ["18 Mon", 1170, 460],
  ["19 Tue", 660, 1120],
  ["20 Wed", 1030, 540],
  ["21 Thu", 1030, 540],
  ["22 Fri", 1030, 540],
  ["23 Sat", 1030, 540],
];

// export const options = {
//   chart: {
//     title: "Company Performance",
//     subtitle: "Sales, Expenses, and Profit: 2014-2017 ",
//   },
// };

export function App() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="150px"
      data={data}
      // options={options}
    />
  );
}
