const { html } = require("snabbdom-jsx");
import { modal } from "../../../styles/modal/modal-styles.css";
import { map } from "rxjs/operators";
import { VNode } from "snabbdom/vnode";

const renderModal = (children: VNode) => <div class={{ [modal]: true }}>{children}</div>;
export const view = map(renderModal);
