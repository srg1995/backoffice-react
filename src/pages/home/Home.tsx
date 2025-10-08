import {
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";

import { useEffect, useMemo, useState } from "react";

import type { Project, Projects } from "../../models/projectModel";
import Pie from "../../components/Pie";
import Line from "../../components/Line";
import { fetchProjects } from "../../services/project/projectService";

export default function Home() {
  const [data, setData] = useState<Projects | null>(null);
  const flagshipProject: Project | undefined = useMemo(
    () => data?.projects.find((p) => p.isFlagship),
    [data],
  );

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProjects().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);
  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <h1 className="text-4xl font-bold">Panel de Control</h1>
      <Divider className="w-full" />

      {loading ? (
        <div className="flex h-[80vh] w-full items-center justify-center">
          <CircularProgress size={100} />
        </div>
      ) : (
        <>
          <div className="flex flex-wrap justify-start gap-4">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  Proyectos en curso
                </Typography>
                <Typography variant="h5" component="div">
                  {data?.summary?.totalProjects || 0}
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  Tareas pendientes
                </Typography>
                <Typography variant="h5" component="div">
                  {data?.summary?.totalPendingTasks || 0}
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  Miembros del equipo
                </Typography>
                <Typography variant="h5" component="div">
                  {data?.summary?.totalTeamMembers || 0}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <h2 className="mt-4 text-3xl font-bold">Proyecto Estrella</h2>

          <div className="flex w-full flex-wrap gap-4 xl:flex-nowrap">
            {flagshipProject && (
              <>
                <Pie data={flagshipProject} /> <Line data={flagshipProject} />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
