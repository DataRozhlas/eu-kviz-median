/* eslint-disable react/no-this-in-sfc */
import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";
import { grafColor, grafAsociace } from "./data";

const GrafAsociace = () => (
  <HighchartsReact
    highcharts={Highcharts}
    options={
      {
        chart: {
          type: "column",
          height: "600px",
        },
        title: {
          text: "Asociace s EU",
        },
        subtitle: {
          text: "Co znamená Evropská unie pro vás osobně?",
        },
        xAxis: {
          title: {
            text: "",
          },
          labels: {
            style: {
              textOverflow: "none",
            },
          },
          categories: grafAsociace.cat,
          plotBands: [{
            color: "#eee",
            from: 0.4,
            to: 3.6,
            label: {
              text: "Češi si častěji než ostatní země V4<br/>spojují s EU negativní asociace",
              align: "center",
              x: 0,
              y: 25,
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
        series: [{
          name: "Česko",
          data: grafAsociace.cz,
          color: grafColor[0],
        }, {
          name: "Slovensko",
          data: grafAsociace.sk,
          color: grafColor[1],
          visible: false,
        }, {
          name: "Maďarsko",
          data: grafAsociace.hu,
          color: grafColor[2],
          visible: false,
        }, {
          name: "Polsko",
          data: grafAsociace.pl,
          color: grafColor[3],
          visible: false,
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 600,
            },
            chartOptions: {
              chart: {
                type: "bar",
              },
              subtitle: {
                text: "Co znamená Evropská unie pro vás osobně?<br>(Češi si častěji než ostatní země V4 spojují s EU negativní asociace)",
              },
              xAxis: {
                labels: {
                  style: {
                    textOverflow: "none",
                    fontSize: "10px",
                  },
                },
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
render(<GrafAsociace />, document.getElementById("graf-asociace"));
