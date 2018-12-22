import { run } from "@cycle/rxjs-run";
import { makeDOMDriver } from "@cycle/dom/lib/es6/rxjs";
import { MainComponent } from "./components/main/index";
import "snabbdom-jsx";

run(MainComponent, { DOM: makeDOMDriver("#app") });
