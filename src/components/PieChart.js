import React from 'react';
import { Pie } from 'react-chartjs-2';
import {ArcElement,Chart} from 'chart.js'

Chart.register(ArcElement)
function PieChart({ chartData }) {
  return (
    <div className="pieChart" style={{width: '414px'}}>
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Report"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;

