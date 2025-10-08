export interface Projects {
  projects: Project[];
  summary: {
    totalProjects: number;
    totalPendingTasks: number;
    totalTeamMembers: number;
    averageYearPerformance: number;
  };
}

export interface Project {
  id: number;
  name: string;
  pendingTasks: number;
  teamMembers: number;
  progress: number;
  quarterPerf: {
    Q1: number;
    Q2: number;
    Q3: number;
    Q4: number;
  };
  isFlagship?: boolean;
  teamPerformance: {
    enero: number;
    febrero: number;
    marzo: number;
    abril: number;
    mayo: number;
    junio: number;
    julio: number;
    agosto: number;
    septiembre: number;
    octubre: number;
    noviembre: number;
    diciembre: number;
  };
  yearPerformance: number;
}
