import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import SalesTable from "./components/SalesTable";
import Filters from "./components/Filters";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import salesData from "./data/salesData.json";
import "./App.css";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

const App = () => {
  const [filterProduct, setFilterProduct] = useState("all");
  const [filteredSalesData, setFilteredSalesData] = useState([]);
  const [filterPeriod, setFilterPeriod] = useState("all");

  useEffect(() => {
    // Apply filters to sales data
    let filteredData = salesData;

    if (filterProduct !== "all") {
      filteredData = filteredData.filter(
        (sale) => sale.product.toLowerCase() === filterProduct.toLowerCase()
      );
    }

    if (filterPeriod !== "all") {
      const currentDate = new Date();
      let startDate;

      if (filterPeriod === "week") {
        startDate = new Date();
        startDate.setDate(currentDate.getDate() - 7); // Calculate start date for last week
      } else if (filterPeriod === "month") {
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          currentDate.getDate()
        ); // Calculate start date for last month
      } else if (filterPeriod === "year") {
        startDate = new Date(
          currentDate.getFullYear() - 1,
          currentDate.getMonth(),
          currentDate.getDate()
        ); // Calculate start date for last year
      }

      startDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

      filteredData = filteredData.filter((sale) => {
        const saleDate = new Date(sale.date);
        return saleDate >= startDate;
      });
    }

    setFilteredSalesData(filteredData);
  }, [salesData, filterProduct, filterPeriod]);

  // Extract necessary data for each chart
  const lineChartData = {
    labels: filteredSalesData.map((sale) => sale.id),
    datasets: [
      {
        label: "Sales Over Time",
        data: filteredSalesData.map((sale) => sale.totalPrice),
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const barChartData = {
    labels: filteredSalesData.map((sale) => sale.product),
    datasets: [
      {
        label: "Sales Comparison",
        data: filteredSalesData.map((sale) => sale.totalPrice),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: filteredSalesData.map((sale) => sale.product),
    datasets: [
      {
        label: "Sales Contribution",
        data: filteredSalesData.map((sale) => sale.totalPrice),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#5ded85",
          "#e157ea",
          "#625df5",
          "#f55d5db5",
          "#e05a3b",
          "#ec7156",
          "#968ac7",
          "#c2d977c2",
          "#eb3911",
        ],
        hoverBackgroundColor: [
          "#d71f46",
          "#196da5",
          "#ab7d0b",
          "#13bc42",
          "#b111bc",
          "#2823b4",
          "#a52020b5",
          "#b43619",
          "#9b2f17",
          "#383254",
          "#72872cc2",
          "#c02b0a",
        ],
      },
    ],
  };

  const handleProductChange = (event) => {
    setFilterProduct(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setFilterPeriod(event.target.value);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <h1 style={{ textAlign: "center" }}>Sales Dashboard</h1>

            {/* Filters Component */}
            <Filters
              filterProduct={filterProduct}
              filterPeriod={filterPeriod}
              onProductChange={handleProductChange}
              onPeriodChange={handlePeriodChange}
            />

            <div className="charts-container">
              {/* SalesTable Component */}
              <SalesTable salesData={filteredSalesData} />

              {/* LineChart and PieChart Components */}
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <LineChart data={lineChartData} />
                <PieChart chartData={pieChartData} />
              </div>

              {/* BarChart Component */}
              <BarChart data={barChartData} />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
