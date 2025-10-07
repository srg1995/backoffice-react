import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Tasks from "./pages/tasks/Tasks";
import Users from "./pages/users/Users";
import Configuration from "./pages/configuration/Configuration";
import Projects from "./pages/projects/Projects";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/users" element={<Users />} />
          <Route path="/configuration" element={<Configuration />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
