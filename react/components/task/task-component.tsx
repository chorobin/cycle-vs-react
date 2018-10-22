import * as React from "react";
import { Task } from "../../../models/task";
import {
  task as taskStyle,
  taskRight as taskStyleRight,
  taskTitle as taskStyleTitle,
  taskLeft as taskStyleLeft,
  taskSelected,
  taskSelectedShow,
} from "../../../styles/task/task-styles.css";

export const TaskComponent: React.SFC<{ task: Task; onClick: () => void; selected: boolean }> = ({ task, onClick, selected }) => (
  <div className={taskStyle} onClick={onClick}>
    <div className={`${taskSelected} ${selected && taskSelectedShow}`} />
    <h3 className={`${taskStyleTitle} ${taskStyleLeft}`}>{task.title}</h3>
    <span className={taskStyleRight}>{task.assignee}</span>
    <span className={taskStyleLeft}>{task.description}</span>
    <span className={taskStyleRight}>{task.due.toString()}</span>
  </div>
);
