import { motion } from "framer-motion";
import ApexCharts from "react-apexcharts";

const KpiCards = () => {
  const kpis = [
    { label: "Total Focus Hours", value: "128" },
    { label: "Execution Rate", value: "92%" },
    { label: "Dominance Streak", value: "17 days" },
  ];
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      {kpis.map((k, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.02 }}
          className="bg-[#131622] p-4 rounded-xl border border-gray-800 text-white"
        >
          <div className="text-sm text-gray-400">{k.label}</div>
          <div className="text-2xl font-bold mt-1">{k.value}</div>
        </motion.div>
      ))}
    </div>
  );
};

const ChartSection = () => {
  // const lineOptions = {
  //   chart: { background: "transparent", toolbar: { show: false } },
  //   stroke: { curve: "smooth", width: 1 },
  //   xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
  //   colors: ["#3b82f6"],
  // };
  // const lineSeries = [{ name: "Focus Intensity", data: [30, 70, 50, 90, 80] }];

  const donutOptions = {
    chart: { background: "transparent" },
    labels: ["Deep Work", "Training", "Recovery", "Intellect"],
    colors: ["#10b981", "#3b82f6", "#f43f5e", "#g6ggh6"],
    legend: { labels: { colors: "#cbd5e1" } },
  };
  const donutSeries = [37, 15, 18, 30];

  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <div className="bg-[#131622] p-4 rounded-xl border border-gray-800">
        <div className="text-gray-300 mb-2">Performance Analytics</div>
        {/* <ApexCharts options={lineOptions} series={lineSeries} type="area" height={200} /> */}
      </div>
      <div className="bg-[#131622] p-4 rounded-xl border border-gray-800">
        <div className="text-gray-300 mb-2">Kill Mode Breakdown</div>
        <ApexCharts options={donutOptions} series={donutSeries} type="donut" height={200} />
      </div>
    </div>
  );
};

const ExecutionTable = () => {
  const logs = [
    { task: "Deep Coding Session", time: "2h 30m", status: "Completed" },
    { task: "Focus Drill", time: "45m", status: "Completed" },
    { task: "Recovery Block", time: "20m", status: "Skipped" },
  ];

  return (
    <>
    <div className="bg-[#131622] p-4 rounded-xl border border-gray-800 mt-6">
      <div className="text-gray-300 mb-4">Execution Feed</div>
      <table className="w-full text-left text-gray-300 text-sm">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-2">Task</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i} className="border-b border-gray-800">
              <td className="py-2">{log.task}</td>
              <td>{log.time}</td>
              <td className={log.status === "Completed" ? "text-green-500" : "text-red-500"}>{log.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default function Dashboard() {
  return (
    <>
    <motion.div
    initial={{y: 20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    >
      <KpiCards />
      <ChartSection />
      <ExecutionTable />
    </motion.div>
    </>
  );
}

