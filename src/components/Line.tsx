import { Card, CardContent, Typography } from "@mui/material";
import type { Project } from "../models/projectModel";
import { useMemo } from "react";
import { LineChart } from "@mui/x-charts";
interface LineProps {
  data: Project;
}
export default function Line({ data }: LineProps) {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const diffPercentMoth = useMemo(() => {
    const lastQuarter = data?.teamPerformance?.diciembre ?? 0;
    const previousQuarter = data?.teamPerformance?.noviembre ?? 0;
    const diffPercent =
      ((lastQuarter - previousQuarter) / previousQuarter) * 100;
    return Math.floor(diffPercent);
  }, [data]);

  const lineData = useMemo(() => {
    return data ? Object.values(data.teamPerformance) : [];
  }, [data]);
  return (
    <Card className="flex w-full flex-col justify-between xl:w-1/2">
      <CardContent className="flex h-full flex-col justify-between gap-2">
        <Typography>Rendimiento del equipo</Typography>
        <Typography variant="h5" component="div" className="!font-bold">
          {data?.yearPerformance || 0}%
        </Typography>
        <Typography component="div" className="text-slate-400">
          Ultimo Mes
          <span
            className={` ${
              diffPercentMoth < 0 ? "text-red-500" : "text-green-500"
            } font-semibold`}
          >
            &nbsp;
            {diffPercentMoth > 0 ? `+${diffPercentMoth}` : diffPercentMoth}%
          </span>
        </Typography>
        <LineChart
          xAxis={[{ data: months }]}
          series={[
            {
              data: lineData,
            },
          ]}
          height={300}
        />
      </CardContent>
    </Card>
  );
}
