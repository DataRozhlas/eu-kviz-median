import React, { useState } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";
import { grafColor, grafyDuveraMini } from "./data";

const commonOptions = {
  chart: {
    type: "line",
  },
  subtitle: {
    text: "Důvěra EU v Česku podle sociodemografických skupin",
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
    enabled: false,
  },
  plotOptions: {
    series: {
      marker: {
        symbol: "circle",
      },
    },
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
};

const specificOptions = [
  {
    title: {
      text: "Vzdělání",
    },
    xAxis: {
      title: {
        text: "",
      },
      categories: grafyDuveraMini.cat,
      plotLines: [{
        color: "#111",
        width: 1,
        dashStyle: "dot",
        value: 10,
        label: {
          text: "slabý vliv<br/>migrační krize<br/>na vzdělanější",
          align: "right",
          rotation: 0,
          x: -10,
          y: 20,
        },
      }],
    },
    series: [{
      name: "základní",
      data: grafyDuveraMini.vzdelani.zs,
      color: grafColor[0],
    }, {
      name: "střední bez maturity",
      data: grafyDuveraMini.vzdelani.ss,
      color: grafColor[1],
      visible: false,
    }, {
      name: "střední s maturitou",
      data: grafyDuveraMini.vzdelani.mat,
      color: grafColor[2],
      visible: false,
    }, {
      name: "vysokoškolské",
      data: grafyDuveraMini.vzdelani.vs,
      color: grafColor[3],
    }],
  },
  {
    title: {
      text: "Příjmy",
    },
    xAxis: {
      title: {
        text: "",
      },
      categories: grafyDuveraMini.cat,
      plotLines: [{
        color: "#111",
        width: 1,
        dashStyle: "dot",
        value: 10,
        label: {
          text: "slabý vliv<br/>migrační krize<br/>na bohatší",
          align: "right",
          rotation: 0,
          x: -10,
          y: 20,
        },
      }],
    },
    series: [{
      name: "nízké",
      data: grafyDuveraMini.prijmy.nizke,
      color: grafColor[0],
    }, {
      name: "střední",
      data: grafyDuveraMini.prijmy.stredni,
      color: grafColor[1],
      visible: false,
    }, {
      name: "vysoké",
      data: grafyDuveraMini.prijmy.vysoke,
      color: grafColor[3],
    }],
  },
  {
    title: {
      text: "Kraj",
    },
    xAxis: {
      title: {
        text: "",
      },
      categories: grafyDuveraMini.cat,
      plotLines: [{
        color: "#111",
        width: 1,
        dashStyle: "dot",
        value: 10,
        label: {
          text: "silnější vliv<br/>obou krizí<br/>v KV a ÚS kraji",
          align: "right",
          rotation: 0,
          x: -20,
          y: 20,
        },
      }, {
        color: "#111",
        width: 1,
        dashStyle: "dot",
        value: 5,
      }],
    },
    series: [{
      name: "Karlovarský a Ústecký",
      data: grafyDuveraMini.regiony.kv,
      color: grafColor[0],
    }, {
      name: "Moravskoslezský",
      data: grafyDuveraMini.regiony.ms,
      color: grafColor[1],
      visible: false,
    }, {
      name: "Praha",
      data: grafyDuveraMini.regiony.praha,
      color: grafColor[4],
    }, {
      name: "ostatní kraje",
      data: grafyDuveraMini.regiony.ost,
      color: grafColor[2],
      visible: false,
    }],
  }, {
    title: {
      text: "Věk při vstupu (2004)",
    },
    xAxis: {
      title: {
        text: "",
      },
      categories: grafyDuveraMini.cat,
      plotLines: [{
        color: "#111",
        width: 1,
        dashStyle: "dot",
        value: 10,
        label: {
          text: "silnější vliv<br/>obou krizí<br/>u nejmladších",
          align: "right",
          rotation: 0,
          x: -20,
          y: 20,
        },
      }, {
        color: "#111",
        width: 1,
        dashStyle: "dot",
        value: 5,
      }],
    },
    series: [{
      name: "pod 15 let",
      data: grafyDuveraMini.vek.do14,
      color: grafColor[0],
    }, {
      name: "15-29 let",
      data: grafyDuveraMini.vek.do29,
      color: grafColor[1],
      visible: false,
    }, {
      name: "30-44 let",
      data: grafyDuveraMini.vek.do44,
      color: grafColor[2],
      visible: false,
    }, {
      name: "45-59 let",
      data: grafyDuveraMini.vek.do59,
      color: grafColor[3],
      visible: false,
    }, {
      name: "nad 60 let",
      data: grafyDuveraMini.vek.nad60,
      color: grafColor[4],
    }],
  },
];

const MiniGraf = ({ grafNo }) => (
  <HighchartsReact
    highcharts={Highcharts}
    options={Object.assign({}, commonOptions, specificOptions[grafNo])}
  />
);

const GrafyDuveraMini = () => {
  const [mobileGrafNo, setMobileGrafNo] = useState(0);
  return (
    window.innerWidth > 600 ? (
      <div id="minigraf-field">
        <MiniGraf grafNo={0} />
        <MiniGraf grafNo={1} />
        <MiniGraf grafNo={2} />
        <MiniGraf grafNo={3} />
      </div>
    ) : (
      <>
        <MiniGraf grafNo={mobileGrafNo} />
        <div id="minigraf-buttons">
          {[0, 1, 2, 3].map((el) => {
            const buttonClass = el === mobileGrafNo ? "graph-btn graph-btn-selected" : "graph-btn";
            return (
              <button
                type="button"
                key={el}
                className={buttonClass}
                onClick={() => setMobileGrafNo(el)}
              >
                {grafyDuveraMini.names[el]}
              </button>
            );
          })}
        </div>
      </>
    )
  );
};

// ========================================
render(<GrafyDuveraMini />, document.getElementById("grafy-duvera-mini"));
