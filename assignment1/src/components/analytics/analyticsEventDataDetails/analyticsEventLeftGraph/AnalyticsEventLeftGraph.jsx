import React, { Component, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class AnalyticsEventBarGraph extends Component {
  state = {
    selectedGraphValue: "column",
    selectedTimeValue: "all",
    defaultDataPoints: [
      { x: 10, y: 71 },
      { x: 20, y: 55 },
      { x: 30, y: 50 },
      { x: 40, y: 65 },
      { x: 50, y: 71 },
      { x: 60, y: 68 },
      { x: 70, y: 38 },
      // { x: 80, y: 92, indexLabel: "Highest" },
      { x: 80, y: 92 },
      { x: 90, y: 54 },
      { x: 100, y: 60 },
      { x: 110, y: 21 },
      { x: 120, y: 49 },
      { x: 130, y: 36 },
    ],
    dataPoints: [
      { x: 10, y: 71 },
      { x: 20, y: 55 },
      { x: 30, y: 50 },
      { x: 40, y: 65 },
      { x: 50, y: 71 },
      { x: 60, y: 68 },
      { x: 70, y: 38 },
      // { x: 80, y: 92, indexLabel: "Highest" },
      { x: 80, y: 92 },
      { x: 90, y: 54 },
      { x: 100, y: 60 },
      { x: 110, y: 21 },
      { x: 120, y: 49 },
      { x: 130, y: 36 },
    ],
  };
  handleOnGraphChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedGraphValue: value });
    // Call your desired function or perform any necessary operations here
    // based on the selected value
    // For example:
    // this.props.yourFunction(value);
  };
  handleOnTimeChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedTimeValue: value });
    this.setState({ dataPoints: this.state.defaultDataPoints.slice(-value) });
    // Call your desired function or perform any necessary operations here
    // based on the selected value
    // For example:
    // this.props.yourFunction(value);
  };
  render() {
    const { selectedGraphValue, selectedTimeValue, dataPoints } = this.state;
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text:
          selectedGraphValue.charAt(0).toLocaleUpperCase() +
          selectedGraphValue.slice(1) +
          " Chart",
      },
      axisX: {
        title: "No of Days",
      },
      axisY: {
        title: "No of people registered",
        includeZero: true,
      },
      data: [
        {
          type: selectedGraphValue, //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: dataPoints,
        },
      ],
    };
    return (
      <React.Fragment>
        <div className="row mb-3">
          <div className="col-6">
            <select
              value={selectedGraphValue}
              onChange={this.handleOnGraphChange}
            >
              <option value="column">Column</option>
              <option value="bar">Bar</option>
              <option value="line">Line</option>
              <option value="area">Area</option>
            </select>
          </div>
          <div className="col-6">
            <select
              value={selectedTimeValue}
              onChange={this.handleOnTimeChange}
            >
              <option value="all">All Time</option>
              <option value="3">Last 30 days</option>
              <option value="9">Last 90 days</option>
              <option value="18">Last 180 days</option>
            </select>
          </div>
        </div>
        <div>
          <CanvasJSChart
            key={selectedTimeValue + selectedGraphValue}
            options={options}
            onRef={(ref) => (this.chart = ref)}
            /* containerProps={{ width: '100%', height: '300px' }} */
          />
          {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
      </React.Fragment>
    );
  }
}

export default AnalyticsEventBarGraph;
