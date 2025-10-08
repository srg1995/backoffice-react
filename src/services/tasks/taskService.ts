import type { Column } from "../../models/taskModel";
import dataTasks from "./tasks.json";
export const fetchTasks = (): Promise<Column[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataTasks);
    }, 1000);
  });
};
