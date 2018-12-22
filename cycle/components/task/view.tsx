const { html } = require("snabbdom-jsx");
import { Task } from "../../../models/task";
import {
  task as taskStyle,
  taskRight as taskStyleRight,
  taskTitle as taskStyleTitle,
  taskLeft as taskStyleLeft,
  taskSelected,
} from "../../../styles/task/task-styles.css";
import { map } from "rxjs/operators";

const renderTask = (task: Task) => (
  <div class={{ [taskStyle]: true }}>
    <div class={{ [taskSelected]: true }} />
    <h3 class={{ [taskStyleTitle]: true, [taskStyleLeft]: true }}>{task.title}</h3>
    <span class={{ [taskStyleRight]: true }}>{task.assignee}</span>
    <span class={{ [taskStyleLeft]: true }}>{task.description}</span>
    <span class={{ [taskStyleRight]: true }}>{task.due.toLocaleDateString()}</span>
  </div>
);

export const view = map(renderTask);
