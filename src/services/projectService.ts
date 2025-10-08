import type { Projects } from "../models/projectModel";
import dataProjetcts from "./projects.json";
export const fetchProjects = (): Promise<Projects> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataProjetcts as Projects);
    }, 1000);
  });
};
