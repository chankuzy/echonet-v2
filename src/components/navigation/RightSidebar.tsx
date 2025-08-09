export const RightSidebar = () => {
  return (
    <div className="p-4 dark:text-white/90">
      {/* Trending Now */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-6">
        <h3 className="font-bold text-lg mb-4">Trending Now</h3>
        {['#EchonetDesign', '#UIInspo', '#TechNews'].map((tag) => (
          <div key={tag} className="py-2 border-b border-gray-200 dark:border-gray-700 last:border-0">
            <p className="font-medium">{tag}</p>
            <p className="text-sm text-gray-500">5,234 posts</p>
          </div>
        ))}
      </div>

      {/* Who to Follow */}
      <div>
        <h3 className="font-bold text-lg mb-4">Who to Follow</h3>
        {[
          { name: "Sarah Lin", handle: "@sarahdesign", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
          { name: "Mike Chen", handle: "@mikewebdev", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
        ].map((user) => (
          <div key={user.handle} className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.handle}</p>
              </div>
            </div>
            <button className="text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-1 rounded-full">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};