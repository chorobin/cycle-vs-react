import { view } from "./view";
import { DOMSource } from "@cycle/dom/lib/es6/rxjs";
import { intent } from "./intent";

export const SearchComponent = ({ DOM }: { DOM: DOMSource }) => ({
  DOM: view,
  value: intent(DOM),
});
