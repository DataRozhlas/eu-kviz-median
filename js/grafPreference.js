/* eslint-disable react/no-this-in-sfc */
import React from "react";
import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";
import { voterCategories, graphPrefData } from "./data";


export const GrafPreference = ({ catId }) => {
  // deep copying the data array so the original doesn't get modified (a highcharts bug?)
  const copiedData = JSON.parse(JSON.stringify(graphPrefData));
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={
      {
        chart: {
          type: "column",
        },
        title: {
          text: "Koho by volil?",
        },
        subtitle: {
          text: "do Poslanecké sněmovny PČR",
        },
        xAxis: {
          title: {
            text: "",
          },
          categories: ["ANO", "ČSSD", "KSČM", "ODS", "TOP 09", "SPD", "Piráti", "KDU-ČSL", "STAN", "Jiná", "Neví/nevolí"],
        },
        yAxis: {
          title: {
            text: "podíl populace",
          },
          labels: {
            formatter() {
              return `${this.value} %`;
            },
          },
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
        series: [{
          name: voterCategories[catId][0],
          data: copiedData[Number(catId) + 1],
          color: "#333",
        }, {
          name: "Populace",
          data: copiedData[0],
          color: "#ccc",
        }],
      }
    }
    />
  );
};

export default GrafPreference;
