/* eslint-disable react/no-this-in-sfc */
import React from "react";
import Highcharts from "highcharts/highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import { voterCategories, graphData, graphMeta } from "./data";

HighchartsMore(Highcharts);

export const RadarGraf = ({ catId, graphId }) => (
  <HighchartsReact
    highcharts={Highcharts}
    options={{
      chart: {
        polar: true,
        type: "line",
      },
      title: {
        text: graphMeta[graphId][0],
        x: 0,
      },
      pane: {
        size: "60%",
      },
      xAxis: {
        title: {
          text: "",
        },
        categories: graphMeta[graphId][1],
        tickmarkPlacement: "on",
        lineWidth: 0,
      },
      yAxis: {
        labels: {
          formatter() {
            return `${this.value} %`;
          },
        },
        gridLineInterpolation: "polygon",
        lineWidth: 0,
        min: 0,
        max: 100,
      },
      tooltip: {
        pointFormat: "<b>{point.series.name}: {point.y} %</b><br/>",
        shared: true,
      },
      exporting: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          marker: {
            symbol: "circle",
          },
        },
      },
      series: [{
        name: voterCategories[catId],
        id: "obr",
        data: graphData[Number(catId) + 1].slice(graphMeta[graphId][2][0], graphMeta[graphId][2][1]),
        pointPlacement: "on",
        color: "#333",
      }, {
        name: "Populace",
        id: "vsi",
        data: graphData[0].slice(graphMeta[graphId][2][0], graphMeta[graphId][2][1]),
        pointPlacement: "on",
        color: "#ccc",
        dashStyle: "dot",
      }],
    }}
  />
);

export default RadarGraf;
