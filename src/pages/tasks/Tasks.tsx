import {
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";
import type { Column } from "../../models/taskModel";
import { fetchTasks } from "../../services/tasks/taskService";

export default function Tasks() {
  const [columns, setColumns] = useState<Column[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetchTasks().then((res) => {
      setColumns(res);
      setLoading(false);
    });
  });
  const getColorScale = (type: string): string => {
    switch (type) {
      case "dev":
        return "#3b82f680";
      case "seo":
        return "#10b98180";
      case "test":
        return "#facc1580";
      default:
        return "#9ca3af80";
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const newColumns = [...columns];

    const sourceCol = newColumns.find((col) => col.id === source.droppableId)!;
    const destCol = newColumns.find(
      (col) => col.id === destination.droppableId,
    )!;

    const [movedTask] = sourceCol.tasks.splice(source.index, 1);
    destCol.tasks.splice(destination.index, 0, movedTask);

    setColumns(newColumns);
  };

  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <h1 className="text-4xl font-bold">Panel de Tareas</h1>
      <Divider className="w-full" />
      {loading ? (
        <div className="flex h-[80vh] w-full items-center justify-center">
          <CircularProgress size={100} />
        </div>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Grid
            container
            spacing={2}
            padding={2}
            className="flex !w-full justify-center"
          >
            {columns?.map((col) => (
              <Grid item xs={12} sm={6} md={4} key={col.id} className="flex-1">
                <Paper sx={{ padding: 2, backgroundColor: "#f4f5f7" }}>
                  <Typography variant="h6" gutterBottom>
                    {col.title}
                  </Typography>
                  <Droppable droppableId={col.id}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {col.tasks.map((task, index) => (
                          <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}
                          >
                            {(provided) => (
                              <Card
                                className={`${getColorScale(task.type || "")}`}
                                sx={{
                                  mb: 1,

                                  cursor: "grab",
                                  backgroundColor: getColorScale(
                                    task.type || "",
                                  ),
                                }}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <CardContent className="flex flex-col gap-2 !p-2">
                                  <Typography>{task.title}</Typography>
                                  <Typography
                                    className="!font-bold"
                                    align="right"
                                  >
                                    {task.type}
                                  </Typography>
                                </CardContent>
                              </Card>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </DragDropContext>
      )}
    </div>
  );
}
