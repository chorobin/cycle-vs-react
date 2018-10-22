export interface Task {
  readonly title: string;
  readonly description: string;
  readonly due: Date;
  readonly assignee: string;
}
