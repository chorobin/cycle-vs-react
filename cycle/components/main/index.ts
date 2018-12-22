import { of, combineLatest } from "rxjs";
import { DOMSource } from "@cycle/dom/lib/es6/rxjs";
import { TaskListComponent } from "../task-list/index";
import { view, renderModalContent } from "./view";
import { ModalComponent } from "../modal/index";
import { SearchComponent } from "../search";
import { model } from "./model";
import { Task } from "../../../models/task";

const tasks: Task[] = [
  { title: "Washing up", description: "Cleaning the dishes", due: new Date(), assignee: "Bob Norris" },
  { title: "Hoovering", description: "The entire house", due: new Date(), assignee: "Cat Norris" },
  { title: "Car Cleaning", description: "Hoovering and dusting the car", due: new Date(), assignee: "Alice Norris" },
];

export const MainComponent = (sources: { DOM: DOMSource }) => {
  const search = SearchComponent(sources);
  const state$ = model(search.value, of(tasks));
  const taskList = TaskListComponent({ props: state$ });
  const modalContent = combineLatest(taskList.DOM, search.DOM, renderModalContent);
  const modal = ModalComponent({ props: modalContent });
  const vnode$ = view(modal.DOM);
  return { DOM: vnode$ };
};
