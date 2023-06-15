import React from 'react';

const SalesTable = ({ salesData }) => {
  return (
    <>
          <h3>Sales Table: </h3>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={tableHeaderStyle}>Sale ID</th>
          <th style={tableHeaderStyle}>Product</th>
          <th style={tableHeaderStyle}>Quantity</th>
          <th style={tableHeaderStyle}>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {salesData.map((sale) => (
          <tr key={sale.id}>
            <td style={tableCellStyle}>{sale.id}</td>
            <td style={tableCellStyle}>{sale.product}</td>
            <td style={tableCellStyle}>{sale.quantity}</td>
            <td style={tableCellStyle}>{sale.totalPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>

  );
};

const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: '#f2f2f2',
  fontWeight: 'bold',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

export default SalesTable;
