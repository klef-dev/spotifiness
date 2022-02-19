import React from "react";
import "./style.css";

export const Search = () => {
  return (
    <div>
      <section className="section">
        <h2 className="title">Top Genres</h2>
        <div className="section--body">
          <div className="section--body--item section--body--item--lg category--item">
            <a href="/">
              <h3>Hip Hop</h3>
              <img src="http://via.placeholder.com/150x150" alt="" />
            </a>
          </div>
          <div className="section--body--item section--body--item--lg category--item">
            <a href="/">
              <h3>Pop</h3>
              <img src="http://via.placeholder.com/150x150" alt="" />
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="title">Browse all</h2>
        <div className="section--body">
          <div className="section--body--item category--item">
            <a href="/">
              <h3>Podcast</h3>
              <img src="http://via.placeholder.com/150x150" alt="" />
            </a>
          </div>

          <div
            className="section--body--item category--item"
            style={{ backgroundColor: "rgb(160, 195, 210)" }}
          >
            <a href="/">
              <h3>Discover</h3>
              <img src="http://via.placeholder.com/150x150" alt="" />
            </a>
          </div>

          <div
            className="section--body--item category--item"
            style={{ backgroundColor: "rgb(160, 195, 210)" }}
          >
            <a href="/">
              <h3>New releases</h3>
              <img src="http://via.placeholder.com/150x150" alt="" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
