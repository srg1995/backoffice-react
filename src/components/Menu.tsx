import { Link } from "react-router-dom";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
export default function Menu() {
  return (
    <aside className="shadow-right bg-amber-50 px-4 py-2 shadow-2xl">
      <h2 className="flex items-center justify-start gap-2 px-2 py-4 text-2xl font-bold">
        <DashboardIcon />
        DASHBOARD
      </h2>
      <nav className="mt-2 flex flex-col gap-2">
        <Link
          to="/"
          className="flex items-start gap-1.5 rounded-md bg-[color] px-2 py-2 font-semibold text-amber-800"
        >
          <HomeOutlinedIcon />
          Inicio
        </Link>
        <Link
          to="/projects"
          className="flex items-start gap-1.5 px-2 py-2 font-semibold"
        >
          <HomeRepairServiceOutlinedIcon />
          Proyectos
        </Link>
        <Link
          to="/tasks"
          className="flex items-start gap-1.5 px-2 py-2 font-semibold"
        >
          <TaskOutlinedIcon />
          Tareas
        </Link>
        <Link
          to="/users"
          className="flex items-start gap-1.5 px-2 py-2 font-semibold"
        >
          <PeopleAltOutlinedIcon />
          usuarios
        </Link>
        <Link
          to="/configuration"
          className="flex items-start gap-1.5 px-2 py-2 font-semibold"
        >
          <SettingsOutlinedIcon />
          Configuración
        </Link>
      </nav>
    </aside>
  );
}
