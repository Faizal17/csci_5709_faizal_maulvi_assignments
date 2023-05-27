import React, { Component, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class AnalyticsEventPieChart extends Component {
  state = {
    selectedTimeValue: "all",
    dataPoints: [
      { y: 300, label: "Below 24" },
      { y: 430, label: "Above 24" },
    ],
    defaultDataPoints: {
      all: [
        { y: 300, label: "Below 24" },
        { y: 430, label: "Above 24" },
      ],
      3: [
        { y: 150, label: "Below 24" },
        { y: 100, label: "Above 24" },
      ],
      9: [
        { y: 250, label: "Below 24" },
        { y: 300, label: "Above 24" },
      ],
      18: [
        { y: 300, label: "Below 24" },
        { y: 430, label: "Above 24" },
      ],
    },
  };
  handleOnTimeChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedTimeValue: value });
    this.setState({ dataPoints: this.state.defaultDataPoints[value] });
  };
  render() {
    const { selectedTimeValue, dataPoints } = this.state;
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", // "light1", "dark1", "dark2"
      title: {
        text: "Age Group",
      },
      data: [
        {
          type: "pie",
          indexLabel: "{label}: {y}",
          startAngle: 0,
          dataPoints: dataPoints,
        },
      ],
    };
    return (
      <React.Fragment>
        <div className="row mt-3 mt-md-0 mb-3">
          <div className="col-md-12">
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
          <CanvasJSChart key={selectedTimeValue} options={options} />
        </div>
      </React.Fragment>
    );
  }
}

export default AnalyticsEventPieChart;
