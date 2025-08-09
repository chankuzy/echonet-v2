import { Outlet } from "react-router-dom";
import { BottomNav } from "../components/navigation/BottomNav";
import { MobileTopbar } from "../components/navigation/MobileTopbar";

export const MobileLayout = () => {
  return (
    <div className="pb-16"> {/* Padding for bottom nav */}
      <MobileTopbar title="Echonet" />
      
      <div className="p-4">
        <Outlet />
      </div>
      
      <BottomNav />
    </div>
  );
};