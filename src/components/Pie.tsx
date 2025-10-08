import { Card, CardContent, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import type { Project } from "../models/projectModel";
import { useMemo } from "react";

interface PieProps {
  data: Project;
}
function Pie({ data }: PieProps) {
  const pieData = useMemo(() => {
    if (!data) return [];

    return Object.entries(data?.quarterPerf).map(([key, value], index) => ({
      id: index,
      label: key,
      value,
    }));
  }, [data]);

  const diffPercentQuarter = useMemo(() => {
    const lastQuarter = data?.quarterPerf?.Q4 ?? 0;
    const previousQuarter = data?.quarterPerf?.Q3 ?? 0;
    const diffPercent =
      ((lastQuarter - previousQuarter) / previousQuarter) * 100;
    return Math.floor(diffPercent);
  }, [data]);
  return (
    <Card className="flex w-full flex-col justify-between xl:w-1/2">
      <CardContent className="flex h-full flex-col justify-between gap-2">
        <Typography>Progreso del proyecto</Typography>
        <Typography variant="h5" component="div" className="!font-bold">
          {data?.progress || 0}%
        </Typography>
        <Typography component="div" className="text-slate-400">
          Ultimo trimestre
          <span
            className={` ${
              diffPercentQuarter < 0 ? "text-red-500" : "text-green-500"
            } font-semibold`}
          >
            &nbsp;
            {diffPercentQuarter > 0
              ? `+${diffPercentQuarter}`
              : diffPercentQuarter}
            %
          </span>
        </Typography>
        <PieChart
          series={[
            {
              data: pieData,
            },
          ]}
          width={200}
          height={200}
        />
      </CardContent>
    </Card>
  );
}

export default Pie;
