export interface Task {
  id: string;
  title: string;
  type?: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
