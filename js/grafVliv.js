/* eslint-disable react/no-this-in-sfc */
import React from "react";
import Highcharts from "highcharts/highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import { voterCategories, graphData } from "./data";

HighchartsMore(Highcharts);

export const GrafVliv = ({ catId }) => (
  <HighchartsReact
    highcharts={Highcharts}
    options={{
      chart: {
        polar: true,
        type: "line",
      },
      title: {
        text: "Vliv EU na ČR",
        x: 0,
      },
      pane: {
        size: "80%",
      },
      xAxis: {
        title: {
          text: "",
        },
        categories: ["EU příliš zasahuje do věcí ČR", "EU zvyšuje vymahatelnost práva", "Evropská integrace se má prohlubovat", "Výhodou EU je studium/práce v zahraničí"],
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
        data: graphData[catId + 1].slice(21, 25),
        pointPlacement: "on",
        color: "#333",
      }, {
        name: "Populace",
        id: "vsi",
        data: graphData[0].slice(21, 25),
        pointPlacement: "on",
        color: "#ccc",
        dashStyle: "dot",
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: "center",
              verticalAlign: "bottom",
            },
            pane: {
              size: "70%",
            },
          },
        }],
      },
    }}
  />
);

export default GrafVliv;
