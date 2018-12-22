import { Observable, combineLatest } from "rxjs";
import { Task } from "../../../models/task";
import { startWith } from "rxjs/operators";

const searchPredicate = (search: string) => (task: Task) => !search || task.title.startsWith(search) || task.description.startsWith(search);

export const model = (search$: Observable<string>, tasks$: Observable<Task[]>) =>
  combineLatest(search$.pipe(startWith("")), tasks$, (search, tasks) => tasks.filter(searchPredicate(search)));
