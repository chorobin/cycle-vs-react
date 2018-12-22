import * as React from "react";
import { search, searchInput, searchClose } from "../../../styles/search/search.css";
import { SearchProps } from "./search-props";

export const SearchComponent: React.SFC<SearchProps> = ({ onSearch }) => (
  <div className={search}>
    <input className={searchInput} type="text" placeholder="Search for tasks" onChange={(e) => onSearch(e.target.value)} />
    <span className={searchClose} />
  </div>
);
