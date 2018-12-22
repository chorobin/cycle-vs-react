import { Observable } from "rxjs";
import { VNode } from "snabbdom/vnode";
import { view } from "./view";

export const ModalComponent = (sources: { props: Observable<VNode> }) => ({
  DOM: view(sources.props),
});
