import React from "react";

const Filters = ({
  filterProduct,
  filterPeriod,
  onProductChange,
  onPeriodChange,
}) => {
  return (
    <div style={{ margin: "35px 10px" }}>
      <label>
        Product: &nbsp;
        <select value={filterProduct} onChange={onProductChange}>
          <option value="all">All</option>
          <option value="Product A">Product A</option>
          <option value="Product B">Product B</option>
          <option value="Product C">Product C</option>
          <option value="Product D">Product D</option>
          <option value="Product E">Product E</option>
          <option value="Product F">Product F</option>
        </select>
      </label>

      <label style={{ marginLeft: "20px" }}>
        Period:&nbsp;
        <select value={filterPeriod} onChange={onPeriodChange}>
          <option value="all">All</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="year">Last Year</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
