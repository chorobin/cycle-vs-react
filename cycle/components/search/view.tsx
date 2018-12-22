const { html } = require("snabbdom-jsx");
import { search, searchInput, searchClose } from "../../../styles/search/search.css";
import { of } from "rxjs";

const renderSearch = (
  <div class={{ [search]: true }}>
    <input class={{ [searchInput]: true }} type="text" placeholder="Search for tasks" />
    <span class={{ [searchClose]: true }} />
  </div>
);

export const view = of(renderSearch);
