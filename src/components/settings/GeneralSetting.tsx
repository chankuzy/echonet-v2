const GeneralSettings = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [language, setLanguage] = useState('en');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <SettingsIcon className="w-6 h-6" />
        General Settings
      </h2>

      <div className="space-y-4">
        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="flex items-center gap-3">
            {isDarkMode ? (
              <Moon className="w-5 h-5 text-primary-500" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
            <div>
              <h3 className="font-medium">Dark Mode</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {isDarkMode ? 'Dark' : 'Light'} theme
              </p>
            </div>
          </div>
          <Switch
            checked={isDarkMode}
            onCheckedChange={toggleDarkMode}
            className="data-[state=checked]:bg-primary-500"
          />
        </div>

        {/* Language Selector */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Language
          </h3>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>
    </div>
  );
};