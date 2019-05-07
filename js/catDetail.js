import React from "react";
import { voterCategories, root } from "./data";

export const CatDetail = ({
  catId, handleCatChange,
}) => (
  <>
    <div id="cat-detail">
      <div id="cat-detail-picbox">
        <img src={`${root}img/${catId}.svg`} alt={voterCategories[catId][0]} className="results-img" />
        <div className="results-category-name">{voterCategories[catId][0]}</div>
      </div>
      <div id="cat-detail-pct">
        <div id="cat-detail-pct-number">{voterCategories[catId][1]}</div>
        <div id="cat-detail-pct-text">Zastoupení v populaci</div>
      </div>
      <div id="cat-detail-info">
        {voterCategories[catId][2]}
      </div>
    </div>
    <div id="cat-switch">
      {voterCategories.map((el, idx) => {
        const nameClass = (catId === idx) ? "cat-switch-name cat-switch-name-selected" : "cat-switch-name"
        return (
        <div className="cat-switch-picbox" role="button" tabIndex={0} key={el[0]} onClick={() => handleCatChange(idx)}>
          <img src={`${root}img/${idx}.svg`} alt={el[0]} className="cat-switch-img" />
          <div className={nameClass}>{el[0]}</div>
        </div>
        );
      })}
    </div>
  </>
);

export default CatDetail;
