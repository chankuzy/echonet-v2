import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./Topbar";

export default function DashboardLayout() {
  return (
    <div className="flex bg-[#0b0d17] min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="p-6 mt-10 ml-[16rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
