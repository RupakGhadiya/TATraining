import React from "react";
import * as d3 from "d3";
import { LineChart, BarChart } from "react-d3-components";
import "./style.css";
import LineGraph from "./Components/LineGraph";

const LineAreaData = [
  {
    label: "Back-End",
    values: [
      { x: 1, y: 4 },
      { x: 2, y: 9 },
      { x: 3, y: 5.5 },
      { x: 4, y: 6 },
      { x: 5, y: 4.5 },
      { x: 6, y: 7 },
      { x: 7, y: 0 },
    ],
  },
  {
    label: "Front-End",
    values: [
      { x: 1, y: 5 },
      { x: 2, y: 9 },
      { x: 3, y: 4.5 },
      { x: 4, y: 7 },
      { x: 5, y: 2.5 },
      { x: 6, y: 9 },
      { x: 7, y: 0 },
    ],
  },
  {
    label: "QA",
    values: [
      { x: 1, y: 6 },
      { x: 2, y: 5 },
      { x: 3, y: 2.5 },
      { x: 4, y: 8 },
      { x: 5, y: 5.5 },
      { x: 6, y: 3 },
      { x: 7, y: 0 },
    ],
  },
  {
    label: "QA",
    values: [
      { x: 1, y: 1 },
      { x: 2, y: 5 },
      { x: 3, y: 2.5 },
      { x: 4, y: 8 },
      { x: 5, y: 5.5 },
      { x: 6, y: 3 },
      { x: 7, y: 0 },
    ],
  },
  {
    label: "QA",
    values: [
      { x: 1, y: 4 },
      { x: 2, y: 5 },
      { x: 3, y: 2.5 },
      { x: 4, y: 8 },
      { x: 5, y: 5.5 },
      { x: 6, y: 3 },
      { x: 7, y: 0 },
    ],
  },
];

function LineTooltip(x, value) {
  return (
    <p
      className="LableBox"
      style={{
        fontSize: "15px",
        // border: "1px solid black",
        padding: "2px 10px",
        borderRadius: "10px",
      }}
    >{`${x}: ${value.y}`}</p>
  );
}

function MyLineChart() {
  const [scaleExtent] = React.useState([1, 7]);

  return (
    <div className="title linechart">
      <h1>Working Hours</h1>
      <LineChart
        data={LineAreaData}
        width={500}
        xAxis={{ label: "Days" }}
        yAxis={{ label: "Hours" }}
        height={307}
        tooltipHtml={LineTooltip}
        shapeColor="blue"
        stroke={{ strokeDasharray: "0", strokeWidth: "4px" }}
        xScale={d3
          .scaleLinear()
          .domain([scaleExtent[0], scaleExtent[1]])
          .range([0, 500 - 90])}
        // xAxis={{tickValues: xScale.ticks(1, 13, 1)}}
        margin={{ top: 20, bottom: 50, left: 50, right: 10 }}
      />
    </div>
  );
}

function customTooltip(_, __, barValue) {
  return (
    <p
      style={{
        fontSize: "15px",
        border: "1px solid black",
        padding: "2px",
        borderRadius: "2px",
      }}
    >{`${barValue}`}</p>
  );
}

function GroupedBarChart() {
  var data = [
    {
      label: "FrontEnd",
      values: [
        { x: "Mon", y: 9 },
        { x: "Tue", y: 6 },
        { x: "Wed", y: 4.5 },
        { x: "Thu", y: 5 },
        { x: "Fri", y: 7 },
      ],
    },
    {
      label: "BackEnd",
      values: [
        { x: "Mon", y: 5 },
        { x: "Tue", y: 8 },
        { x: "Wed", y: 3.5 },
        { x: "Thu", y: 6 },
        { x: "Fri", y: 5 },
      ],
    },
    {
      label: "QA",
      values: [
        { x: "Mon", y: 7 },
        { x: "Tue", y: 3 },
        { x: "Wed", y: 3.5 },
        { x: "Thu", y: 5 },
        { x: "Fri", y: 8 },
      ],
    },
  ];

  return (
    <div className="title">
      <h1>Grouped / Stacked Bar Chart</h1>
      <div style={{ display: "flex" }}>
        <p className="FrontEnd">
          <span className="dot dot-FrontEnd" /> FrontEnd
        </p>
        <p className="BackEnd">
          <span className="dot dot-BackEnd" /> BackEnd
        </p>
        <p className="QA">
          <span className="dot dot-QA" /> QA
        </p>
      </div>
      <div className="grouped">
        <BarChart
          groupedBars
          data={data}
          width={500}
          // colorScale={d3.scaleOrdinal(d3.schemeCategory10)}
          height={307}
          tooltipHtml={customTooltip}
          xAxis={{ label: "Days" }}
          yAxis={{ label: "Working Hours" }}
          // tooltipMode="element" //element does not work on grouped
          // tooltipOffset={{ top: 30, left: 20 }} // for element
          margin={{ top: 20, bottom: 50, left: 50, right: 0 }}
        />
      </div>
    </div>
  );
}

export { MyLineChart, GroupedBarChart };




const App = () => {
  return (
    <div>
      <LineGraph/>
    </div>
  )
}

export default App