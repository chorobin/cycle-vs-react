const { html } = require("snabbdom-jsx");
import { taskList as taskListStyles } from "../../../styles/task-list/task-list.css";
import { VNode } from "snabbdom/vnode";
import { map } from "rxjs/operators";

const renderTaskList = (tasks: VNode[]) => <div class={{ [taskListStyles]: true }}>{tasks}</div>;
export const view = map(({ tasks }: { tasks: VNode[] }) => renderTaskList(tasks));
