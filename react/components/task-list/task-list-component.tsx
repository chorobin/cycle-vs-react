import * as React from "react";
import { Task } from "../../../models/task";
import { TaskComponent } from "../task/task-component";
import { taskList as taskListStyles } from "../../../styles/task-list/task-list.css";

export const TaskListComponent: React.SFC<{ tasks: Task[]; onSelected: (task: Task) => void; selectedTasks: Task[] }> = ({
  tasks,
  onSelected,
  selectedTasks,
}) => (
  <div className={taskListStyles}>
    {tasks.map((task, index) => (
      <TaskComponent key={index} task={task} onClick={() => onSelected(task)} selected={selectedTasks.some((foundTask) => foundTask === task)} />
    ))}
  </div>
);
