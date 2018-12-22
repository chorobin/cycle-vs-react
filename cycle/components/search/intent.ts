import { DOMSource } from "@cycle/dom/lib/es6/rxjs";
import { search } from "../../../styles/search/search.css";
import { map, distinctUntilChanged, debounceTime } from "rxjs/operators";

export const intent = (domSource: DOMSource) =>
  domSource
    .select(`.${search}`)
    .events("input")
    .pipe(
      map((e: any) => e.target.value),
      distinctUntilChanged(),
      debounceTime(500),
    );
