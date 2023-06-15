import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

const LineChart = ({ data }) => {
  console.log("LineChart", data);
  const options = {
    scales: {
      x: {
        type: "category",
        labels: data.labels, // Pass the labels from the data prop
      },
    },
  };

  return (
    <div id="lineChart"  style={{width: '829px'}}>
      <h3>Line Chart: </h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
