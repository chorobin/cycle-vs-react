import { Observable } from "rxjs";
import { Task } from "../../../models/task";
import { view } from "./view";

export const TaskComponent = (sources: { props: Observable<Task> }) => ({
  DOM: view(sources.props),
});
