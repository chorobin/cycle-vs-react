import * as React from "react";
import { Task } from "../../../models/task";
import { TaskComponent } from "../task/task-component";
import { taskList as taskListStyles } from "../../../styles/task-list/task-list.css";

const searchPredicate = (search: string) => (task: Task) => !search || task.title.startsWith(search) || task.description.startsWith(search);

export const TaskListComponent: React.SFC<{ tasks: Task[]; onSelected: (task: Task) => void; selectedTasks: Task[]; search: string }> = ({
  tasks,
  onSelected,
  selectedTasks,
  search,
}) => (
  <div className={taskListStyles}>
    {tasks.filter(searchPredicate(search)).map((task, index) => (
      <TaskComponent key={index} task={task} onClick={() => onSelected(task)} selected={selectedTasks.some((foundTask) => foundTask === task)} />
    ))}
  </div>
);
