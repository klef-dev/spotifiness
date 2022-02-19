import React from "react";
import "./style.css";
import PlayIcon from "../../icons/Play";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <section className="section">
        <div className="section--header">
          <div className="section--header--left">
            <h2 className="title">Home</h2>
          </div>
          <div className="section--header--right">
            <Link to="/" className="section--header--right--more">
              VIEW ALL
            </Link>
          </div>
        </div>
        <div className="section--body">
          <div className="section--body--item album--item">
            <div className="section--body--item--img">
              <img src="http://via.placeholder.com/150x150" alt="" />
            </div>
            <p className="section--body--item--title">Album name</p>
            <p className="section--body--item--subtitle">
              <Link to="/">Artist name</Link>
            </p>
            <div className="section--body--item--play">
              <PlayIcon style={{ width: "24px", height: "24px" }} />
            </div>
          </div>

          <div className="section--body--item artist--item">
            <div className="section--body--item--img">
              <img src="http://via.placeholder.com/150x150" alt="" />
            </div>
            <p className="section--body--item--title">LEX</p>
            <p className="section--body--item--subtitle">Artist</p>
            <div className="section--body--item--play">
              <PlayIcon style={{ width: "24px", height: "24px" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section--header">
          <div className="section--header--left">
            <h2 className="title">Jump back in</h2>
            <h3 className="subtitle">
              What you listened most in the last months.
            </h3>
          </div>
        </div>
        <div className="section--body">
          <div className="section--body--item album--item">
            <div className="section--body--item--img">
              <img src="http://via.placeholder.com/150x150" alt="" />
            </div>
            <p className="section--body--item--title">Album name</p>
            <p className="section--body--item--subtitle">
              <Link to="/">Artist name</Link>
            </p>
            <div className="section--body--item--play">
              <PlayIcon style={{ width: "24px", height: "24px" }} />
            </div>
          </div>

          <div className="section--body--item artist--item">
            <div className="section--body--item--img">
              <img src="http://via.placeholder.com/150x150" alt="" />
            </div>
            <p className="section--body--item--title">LEX</p>
            <p className="section--body--item--subtitle">Artist</p>
            <div className="section--body--item--play">
              <PlayIcon style={{ width: "24px", height: "24px" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
