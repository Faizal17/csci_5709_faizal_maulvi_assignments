import React, { Component } from "react";
import AnalyticsEventDetail from "./analyticsEventDetail/AnalyticsEventDetail";
import AnalyticsEventDataDetails from "./analyticsEventDataDetails/AnalyticsEventDataDetails";

class Analytics extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <AnalyticsEventDetail></AnalyticsEventDetail>
        <AnalyticsEventDataDetails></AnalyticsEventDataDetails>
      </React.Fragment>
    );
  }
}

export default Analytics;
