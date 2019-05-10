import React from "react";
import { createPortal } from "react-dom";
import { CatInfo } from "./catInfo";
import { RadarGraf } from "./radarGraf";
import { GrafPreference } from "./grafPreference";
import { graphMeta } from "./data";

export const DetailBox = ({
  catId, graphId, handleGraphChange, handleCatChange,
}) => createPortal((
  <div id="detail-box">
    <CatInfo catId={catId} handleCatChange={handleCatChange} />
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
