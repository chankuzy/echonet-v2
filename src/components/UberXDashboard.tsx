// import { Card, CardContent }from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Search, Bell, Mail } from "lucide-react";
// import { useState } from "react";
import HeaderBar from "./HeaderBar";

export default function UberXDashboard() {
  // const [theme, setTheme] = useState("dark");

  return (
    <>
      <div className="bg-[#0e0b1c] min-h-screen text-white p-4">
        {/* Header */}
        {/* <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold">UberX</span>
            <div className="relative">
              <input
                type="text"
                placeholder="Search your today analysis"
                className="bg-[#1a162d] text-white px-4 py-2 rounded-full w-72"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              // variant="ghost"
              className={`px-3 py-1 rounded-full border ${
                theme === "dark" ? "bg-[#312b55]" : "bg-white text-black"
              }`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <Mail className="h-5 w-5" />
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/src/assets/avatar.jpg"
                alt="Avatar"
                className="rounded-full w-8 h-8 object-cover"
              />
              <span>Lincoln Saris</span>
            </div>
          </div>
        </div> */}
        <HeaderBar />
        {/* Top Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Cars", value: "750+" },
            { label: "Daily Trips", value: "1697+" },
            { label: "Clients Annually", value: "85k+" },
            { label: "Kilometers Daily", value: "2167+" },
          ].map((item) => (
            <div key={item.label} className="bg-[#1a162d]">
              <div className="p-4">
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="text-2xl font-semibold mt-2">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Graph + Analytics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2 bg-[#1a162d]">
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-2">Miles Statistics</p>
              <div className="h-48 bg-[#0e0b1c] rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[Graph Placeholder]</span>
              </div>
            </div>
          </div>
          <div className="bg-[#1a162d]">
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-2">Analytic View</p>
              <div className="h-48 bg-[#0e0b1c] rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold">$272.98</p>
                  <p className="text-green-400 text-sm mt-1">+2.52%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cars */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { title: "Volvo EX30", desc: "Fully electric crossover" },
            { title: "Porche 911", desc: "2025 Sport Edition" },
            { title: "Porche 911", desc: "2025 Sport Edition" },
          ].map((car, i) => (
            <div key={i} className="bg-[#1a162d]">
              <div className="p-4 flex items-center space-x-4">
                <div className="w-24 h-14 bg-[#0e0b1c] rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">[Img]</span>
                </div>
                <div>
                  <p className="text-lg font-semibold">{car.title}</p>
                  <p className="text-sm text-gray-400">{car.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
