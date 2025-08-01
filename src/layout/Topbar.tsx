export const TopBar = () => {
  return (
    <div className="fixed w-full top-0 flex items-center justify-between h-16 bg-[#0f111c] border-b border-gray-800 px-6">
      <div className="text-gray-300 ml-64">Welcome back, Operator</div>
      <div className="flex items-center gap-4">
        <div className="text-gray-400 text-sm">07:42 PM</div>
        <img
          src="/src/assets/react.svg"
          alt="profile"
          className="rounded-full w-8 h-8 border border-gray-700"
        />
      </div>
    </div>
  );
};