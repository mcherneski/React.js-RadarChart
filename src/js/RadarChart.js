import React from "react";
import { Radar } from "react-chartjs-2";
import { RadarData, RadarOptions } from "./ChartConfig";

export class RadarChart extends React.Component {
  constructor(props) {
    super(props);

    this.chartRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.chartRef);
  }

  render() {
    return (
      <Radar ref={this.chartRef} data={RadarData} options={RadarOptions} />
    );
  }
}
