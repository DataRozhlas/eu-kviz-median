/* eslint-disable react/no-this-in-sfc */
import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";
import { grafColor, grafDuvera } from "./data";

const GrafDuvera = () => (
  <HighchartsReact
    highcharts={Highcharts}
    options={
      {
        chart: {
          type: "line",
        },
        title: {
          text: "Důvěra EU, země Visegrádu",
        },
        xAxis: {
          title: {
            text: "",
          },
          categories: grafDuvera.cat,
          plotBands: [{
            color: "#eee",
            from: 3,
            to: 3.5,
            label: {
              text: "předs. EU",
              align: "center",
              x: 0,
              y: 250,
            },
          }, {
            color: "#eee",
            from: 3.6,
            to: 8,
            label: {
              text: "dluhová a ekonomická krize",
              align: "center",
              x: 0,
              y: 250,
            },
          }, {
            color: "#eee",
            from: 8.1,
            to: 10,
            label: {
              text: "migrační krize",
              align: "center",
              x: 0,
              y: 250,
            },
          }],
        },
        yAxis: {
          title: {
            text: "",
          },
          labels: {
            formatter() {
              return `${this.value} %`;
            },
          },
          plotBands: {
            color: "#fff",
            from: 15,
            to: 80,
          },
          min: 0,
        },
        tooltip: {
          pointFormatter() {
            return `<b>${this.series.name}: ${String(this.y).replace(".", ",")} %</b><br/>`;
          },
          shared: true,
        },
        exporting: {
          enabled: false,
        },
        credits: {
          href: "https://www.gesis.org/eurobarometer-data-service/survey-series/standard-special-eb/study-overview/eurobarometer-883-za6928-november-2017/",
          text: "Zdroj: Eurobarometer 88.3",
        },
        plotOptions: {
          series: {
            marker: {
              symbol: "circle",
            },
          },
        },
        series: [{
          name: "Česko",
          data: grafDuvera.cz,
          color: grafColor[0],
        }, {
          name: "Slovensko",
          data: grafDuvera.sk,
          color: grafColor[1],
          visible: false,
        }, {
          name: "Maďarsko",
          data: grafDuvera.hu,
          color: grafColor[2],
          visible: false,
        }, {
          name: "Polsko",
          data: grafDuvera.pl,
          color: grafColor[3],
          visible: false,
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 600,
            },
            chartOptions: {
              xAxis: {
                plotBands: [],
              },
            },
          }],
        },
      }
    }
  />
);

// ========================================
render(<GrafDuvera />, document.getElementById("graf-duvera"));
