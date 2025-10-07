import { Card, CardContent, Divider, Typography } from "@mui/material";
import { LineChart, PieChart } from "@mui/x-charts";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <h1 className="text-4xl font-bold">Panel de Control</h1>
      <Divider className="w-full" />
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
              7
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
              23
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
              15
            </Typography>
          </CardContent>
        </Card>
      </div>
      <h2 className="mt-4 text-3xl font-bold">Resumen de Proyectos</h2>
      <div className="flex w-full flex-wrap gap-4 xl:flex-nowrap">
        <Card className="flex w-full flex-col justify-between xl:w-1/2">
          <CardContent className="flex h-full flex-col justify-between gap-2">
            <Typography>Progreso del proyecto</Typography>
            <Typography variant="h5" component="div" className="!font-bold">
              65%
            </Typography>
            <Typography component="div" className="text-slate-400">
              Ultimo trimestre
              <span className="font-semibold text-green-500"> +12%</span>
            </Typography>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
              width={200}
              height={200}
            />
          </CardContent>
        </Card>
        <Card className="flex w-full flex-col justify-between xl:w-1/2">
          <CardContent className="flex h-full flex-col justify-between gap-2">
            <Typography>Rendimiento del equipo</Typography>
            <Typography variant="h5" component="div" className="!font-bold">
              82%
            </Typography>
            <Typography component="div" className="text-slate-400">
              Ultimo trimestre
              <span className="font-semibold text-red-500"> -5%</span>
            </Typography>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              height={300}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
