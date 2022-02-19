import React from "react";
import "./style.css"

export const Header = () => {
  return (
    <div className="header">
      <div className="header--bg"></div>
      <div className="header--buttons">
        <button className="header--button previous">
          <i className="lni-chevron-left"></i>
        </button>
        <button className="header--button next">
          <i className="lni-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};
