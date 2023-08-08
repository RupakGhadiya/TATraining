import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';



const LineGraph = () => {
  const [data, setData] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    // Get data from input fields
    const xValue = e.target.xValue.value;
    const yValue = e.target.yValue.value;
  
    try {
      // Send data to the API
      const response = await axios.post('http://localhost:3000/data', { xValue, yValue });
  
      if (response.status === 200) {
        const newData = response.data;
        setData(newData);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          X Value:
          <input type="text" name="xValue" />
        </label>
        <label>
          Y Value:
          <input type="text" name="yValue" />
        </label>
        <button type="submit">Add Data</button>
      </form>

      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="xValue" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="yValue" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </div>
  );
};

export default LineGraph;
