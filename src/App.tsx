import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { Goals } from "./pages/Goals";
import { TimeBlocks } from "./pages/TimeBlocks";
import { KillMode } from "./pages/KillMode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/kill-mode" element={<KillMode />} />
          <Route path="/time-blocks" element={<TimeBlocks />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;