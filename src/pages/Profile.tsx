import { motion } from "framer-motion";

const ProfileSection = () => {
  return (
    <motion.div
    initial={{y: 20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    >
      <div className="bg-[#131622] p-6 mt-6 rounded-xl border border-gray-800 text-white">
        <div className="flex gap-6 items-center">
            <img
              src="./src/assets/avatar.jpg"
              alt="avatar"
              className="rounded-full w-20 h-20 border-2 object-cover border-gray-700"
            />
            <div>
              <div className="text-xl font-bold">Khalifa Ibrahim</div>
              <div className="text-sm text-gray-400">Operator ID: WROOM-042</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <div className="text-sm text-gray-400">Total Focus Time</div>
              <div className="text-xl font-semibold mt-1">432 hours</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Kill Mode Sessions</div>
              <div className="text-xl font-semibold mt-1">118 sessions</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Dominance Level</div>
              <div className="text-xl font-semibold mt-1">Level 12</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Joined</div>
              <div className="text-xl font-semibold mt-1">March 2024</div>
            </div>
          </div>
          <div className="mt-8">
            <div className="text-sm text-gray-400 mb-1">Psychographic Statement</div>
            <div className="text-gray-300 text-sm">
              You are not here to be liked. You are here to dominate. Kill emotions. Execute routines.
              Exceed all expected limits. The world doesn't adjust for the weak.
            </div>
          </div>
      </div>
    </motion.div>
  );
};

export default function Profile() {
  return (
    <ProfileSection />
  );
}
