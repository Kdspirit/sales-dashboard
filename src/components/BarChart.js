import React from "react";
import { Bar } from "react-chartjs-2";
import { BarElement, Chart } from "chart.js";
Chart.register(BarElement);

const BarChart = ({ data }) => {
  return (
    <div id="barChart">
      <h3>Bar Chart: </h3>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
