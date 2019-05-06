/* eslint-disable react/no-this-in-sfc */
import React from "react";
import Highcharts from "highcharts/highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import { voterCategories, graphData } from "./data";

HighchartsMore(Highcharts);

export const GrafPostoje = ({ catId }) => (
  <HighchartsReact
    highcharts={Highcharts}
    options={{
      chart: {
        polar: true,
        type: "line",
      },
      title: {
        text: "Postoje a kapitál",
        x: 0,
      },
      pane: {
        size: "80%",
      },
      xAxis: {
        title: {
          text: "",
        },
        categories: ["Profit z globalizace", "Obavy z migrace", "Vyšší kulturní kapitál", "Vyšší sociální kapitál", "Chudoba", "Autoritářství", "Náchylnost k populismu", "Nadějná budoucnost společnosti"],
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
        data: graphData[catId + 1].slice(7, 15),
        pointPlacement: "on",
        color: "#333",
      }, {
        name: "Populace",
        id: "vsi",
        data: graphData[0].slice(7, 15),
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

export default GrafPostoje;
