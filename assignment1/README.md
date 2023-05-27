# Assignment 1

**[Individual Assignment]** In this assignmen, I have created a feature chosen from the project "Data analysis and visulization". I have used React for fron-end development and learned the use of states and changing the dom as per users input. I have used open-source library for chart generation.

- _Date Created_: 27 MAY 2023
- _Last Modification Date_: 27 MAY 2023
- _Deployment URL_: <https://master--frabjous-donut-e081a2.netlify.app/>
- _Git URL_: <https://git.cs.dal.ca/maulvi/csci_5709_faizal_maulvi_assignments>

## Authors

- [Faizal Maulvi](mh795616@dal.ca) - _(B00936426)_

## Testing

For the testing purpose, I made sure that my webpage is responsive and works for all the devices. I have used bootstrap for the same.

## Deployment

I've also hosted this assignment into my personal github repo which helped in hosting it onto [Netlify](https://www.netlify.com/). The deployment link is https://master--frabjous-donut-e081a2.netlify.app/

## Built With

- [React](https://react.dev/learn/start-a-new-react-project) - The web framework used
- [Bootstrap](https://getbootstrap.com/) - For responsive UI
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Used to get bootstrap icons
- [Canvasjs Charts](https://canvasjs.com/react-charts/) - Used to create data visualizations using chart and graphs

## Sources Used

- https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works

### File Name - assignment1/src/components/header/Header.jsx

_Lines 08 - 98_

```
<nav
className="navbar navbar-expand-lg bg-dark mb-2"
data-bs-theme="dark"
>
<div className="container-fluid">
    <a className="navbar-brand" href="#">
        Logo
    </a>
    <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 text-start">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
                Home
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Notifications
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Help
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Profile
            </a>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
                Search
            </button>
        </form>
        </div>
    </div>
</nav>

```

The code above was created by adapting the code in [Bootstrap docs](https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works) as shown below:

```
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

```

- The code in [Bootstrap docs](https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works) was implemented by the Bootstrap team
- [Bootstrap docs](https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works)'s Code was used because it gave a responsive template to start with as navbar
- [Bootstrap docs](https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works)'s Code was modified by me to setup the navbar according to my project needs by changing the content and styling

### File Name - assignment1/src/components/analytics/analyticsEventDataDetails/analyticsEventLeftGraph/AnalyticsEventLeftGraph.jsx

_Lines 62 - 125_

```
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

```

The code above was created by adapting the code in [Canvasjs docs](https://canvasjs.com/react-charts/chart-index-data-label/) as shown below:

```
/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Simple Column Chart with Index Labels"
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ x: 10, y: 71 },
					{ x: 20, y: 55 },
					{ x: 30, y: 50 },
					{ x: 40, y: 65 },
					{ x: 50, y: 71 },
					{ x: 60, y: 68 },
					{ x: 70, y: 38 },
					{ x: 80, y: 92, indexLabel: "Highest" },
					{ x: 90, y: 54 },
					{ x: 100, y: 60 },
					{ x: 110, y: 21 },
					{ x: 120, y: 49 },
					{ x: 130, y: 36 }
				]
			}]
		}

		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
				/* containerProps={{ width: '100%', height: '300px' }} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}

		</div>
		);
	}
}

module.exports = App;

```

- The code in [Canvasjs docs](https://canvasjs.com/react-charts/chart-index-data-label/) was implemented by the CanvasJS team
- [Canvasjs docs](https://canvasjs.com/react-charts/chart-index-data-label/)'s Code was used because it helped me to get a basic understanding how the charts are integrated within the react
- [Canvasjs docs](https://canvasjs.com/react-charts/chart-index-data-label/)'s Code was modified by me to update the chart while updating the type of graph or the time frame when chose by user. Hence, state management code was added by me.

## Acknowledgments

- https://www.youtube.com/watch?v=Ke90Tje7VS0
- https://app.diagrams.net/
- https://balsamiq.com/
- https://react.dev/learn
- https://getbootstrap.com/
- https://icons.getbootstrap.com/
- https://canvasjs.com/react-charts/
- https://answers.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752
