/* eslint-disable react/no-this-in-sfc */
import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";
import { grafColor, grafSocDemoData } from "./data";

const GrafSocDemo = () => (
  window.innerWidth > 600 && (
    <HighchartsReact
      highcharts={Highcharts}
      options={
        {
          chart: {
            type: "column",
          },
          title: {
            text: "Důvěra EU",
          },
          subtitle: {
            text: "podle sociodemografických skupin",
          },
          xAxis: {
            title: {
              text: "",
            },
            categories: grafSocDemoData.cat,
            plotBands: [{
              color: "#eee",
              from: -0.5,
              to: 1.45,
              label: {
                text: "pohlaví",
                align: "center",
                x: 0,
                y: 25,
              },
            }, {
              color: "#eee",
              from: 1.55,
              to: 3.45,
              label: {
                text: "věk",
                align: "center",
                x: 0,
                y: 25,
              },
            }, {
              color: "#eee",
              from: 3.55,
              to: 5.45,
              label: {
                text: "vzdělání",
                align: "center",
                x: 0,
                y: 25,
              },
            }, {
              color: "#eee",
              from: 5.55,
              to: 7.45,
              label: {
                text: "sociální<br/>status",
                align: "center",
                x: 0,
                y: 25,
              },
            }, {
              color: "#eee",
              from: 7.55,
              to: 9.45,
              label: {
                text: "příjem",
                align: "center",
                x: 0,
                y: 25,
              },
            }, {
              color: "#eee",
              from: 9.55,
              to: 12.45,
              label: {
                text: "bydliště",
                align: "center",
                x: 0,
                y: 25,
              },
            }, {
              color: "#eee",
              from: 12.55,
              to: 15.45,
              label: {
                text: "politické<br/>postoje",
                align: "center",
                x: 0,
                y: 25,
              },
            }, {
              color: "#eee",
              from: 15.55,
              to: 17.5,
              label: {
                text: "znalost EU",
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
            data: grafSocDemoData.cz,
            color: grafColor[0],
          }, {
            name: "Slovensko",
            data: grafSocDemoData.sk,
            color: grafColor[1],
            visible: false,
          }, {
            name: "Maďarsko",
            data: grafSocDemoData.hu,
            color: grafColor[2],
            visible: false,
          }, {
            name: "Polsko",
            data: grafSocDemoData.pl,
            color: grafColor[3],
            visible: false,
          }],
        }
      }
    />
  )
);

// ========================================
render(<GrafSocDemo />, document.getElementById("graf-duvera-socdemo"));
