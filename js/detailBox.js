import React from "react";
import { createPortal } from "react-dom";
import { RadarGraf } from "./radarGraf";
import { GrafPreference } from "./grafPreference";
import { graphMeta, voterCategories } from "./data";

export const DetailBox = ({
  catId, graphId, handleCatChange, handleGraphChange,
}) => createPortal((
  <div id="detail-box">
    <div id="cat-switch">
      {
        voterCategories.map((el, idx) => {
          const buttonClass = String(catId) === String(idx) ? "graph-btn graph-btn-selected" : "graph-btn";
          return (
            <button type="button" className={buttonClass} key={el} value={idx} onClick={e => handleCatChange(e)}>
              {el}
            </button>
          );
        })
      }
    </div>
    <RadarGraf catId={catId} graphId={graphId} />
    <div id="radar-switch">
      {
        graphMeta.map((el, idx) => {
          const buttonClass = String(graphId) === String(idx) ? "graph-btn graph-btn-selected" : "graph-btn";
          return (
            <button type="button" className={buttonClass} key={el[0]} value={idx} onClick={e => handleGraphChange(e)}>
              {el[0]}
            </button>
          );
        })
      }
    </div>
    <GrafPreference catId={catId} />
  </div>), document.getElementById("eu-app-box"));

export default DetailBox;
