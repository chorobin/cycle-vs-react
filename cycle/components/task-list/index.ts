import { Observable, of, from, merge } from "rxjs";
import { Task } from "../../../models/task";
import { mergeMap, map, toArray } from "rxjs/operators";
import { TaskComponent } from "../task";
import { view } from "./view";

export const TaskListComponent = (sources: { props: Observable<Task[]> }) => ({
  DOM: sources.props.pipe(
    mergeMap((tasks) => merge(...tasks.map((task) => TaskComponent({ props: of(task) }).DOM)).pipe(toArray())),
    map((nodes) => ({ tasks: nodes })),
    view,
  ),
});
