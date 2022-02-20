import { useStoreActions } from "easy-peasy";
import React, { useState } from "react";
import SearchIcon from "../../icons/Search";

export const Search = () => {
  const [query, setQuery] = useState("");
  const search = useStoreActions((actions) => actions.search);

  const handleChange = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length >= 3)
      try {
        await search({ query: e.target.value });
      } catch (error) {
        console.log(error);
      }
  };
  return (
    <div className="header--search input-group has-left-icon has-right-icon can-delete">
      <SearchIcon
        style={{ width: "24px", height: "24px" }}
        className="left-icon"
      />
      <input
        type="search"
        id="search"
        name="search"
        className="input"
        placeholder="Artist, songs or albums"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};
