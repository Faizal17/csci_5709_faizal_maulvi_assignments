import React, { Component } from "react";
import AnalyticsEventBarGraph from "./analyticsEventLeftGraph/AnalyticsEventLeftGraph";
import AnalyticsEventPieChart from "./analyticsEventPieChart/AnalyticsEventPieChart";

class AnalyticsEventDataDetails extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <hr></hr>
        <h3 className="text-center m-0">Data Analytics</h3>
        <hr></hr>
        <div className="row">
          <div className="col-md-6">
            <AnalyticsEventBarGraph></AnalyticsEventBarGraph>
          </div>
          <div className="col-md-6">
            <AnalyticsEventPieChart></AnalyticsEventPieChart>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AnalyticsEventDataDetails;
