import { Divider } from "@mui/material";
import React from "react";

export default function Tasks() {
  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <h1 className="text-4xl font-bold">Panel de Tareas</h1>
      <Divider className="w-full" />
    </div>
  );
}
