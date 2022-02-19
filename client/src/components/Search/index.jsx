import React from "react";
import SearchIcon from "../../icons/Search";

export const Search = () => {
  return (
    <div className="header--search input-group has-left-icon has-right-icon can-delete">
      <SearchIcon
        style={{ width: "24px", height: "24px" }}
        className="left-icon"
      />
      <input
        type="text"
        id="search"
        name="search"
        className="input"
        placeholder="Search"
      />
    </div>
  );
};
