import * as React from "react";
import { main, mainContainer } from "../../../styles/main/main.css";
import { Task } from "../../../models/task";
import { TaskListComponent } from "../task-list/task-list-component";

const tasks: Task[] = [
  { title: "Washing up", description: "Cleaning the dishes", due: new Date(), assignee: "Bob Norris" },
  { title: "Hoovering", description: "The entire house", due: new Date(), assignee: "Cat Norris" },
  { title: "Car Cleaning", description: "Hoovering and dusting the car", due: new Date(), assignee: "Alice Norris" },
];

export class MainComponent extends React.Component<{}, { selectedTasks: Task[] }> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      selectedTasks: [],
    };
  }

  public onSelected(task: Task): void {
    const newTasks = this.state.selectedTasks.filter((selectedTask) => selectedTask !== task);
    this.setState({
      selectedTasks: newTasks.length === this.state.selectedTasks.length ? [...newTasks, task] : newTasks,
    });
  }

  public render(): JSX.Element {
    return (
      <div className={mainContainer}>
        <div className={main}>
          <TaskListComponent tasks={tasks} selectedTasks={this.state.selectedTasks} onSelected={(task) => this.onSelected(task)} />
        </div>
      </div>
    );
  }
}
