import { main, mainContainer } from "../../../styles/main/main.css";
import { VNode } from "snabbdom/vnode";
import { map } from "rxjs/operators";
const { html } = require("snabbdom-jsx");

const renderMain = (children: VNode) => (
  <div class={{ [mainContainer]: true }}>
    <div class={{ [main]: true }}>{children}</div>
  </div>
);

export const renderModalContent = (taskList: VNode, search: VNode) => (
  <div>
    {search}
    {taskList}
  </div>
);

export const view = map(renderMain);
