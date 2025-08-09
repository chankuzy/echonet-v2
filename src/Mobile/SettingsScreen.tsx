import { useState } from 'react';
import { 
  Moon, 
  Key, 
  MessageSquare, 
  BookOpen,
  AlertTriangle,
  Smartphone, 
  ClipboardList,
  BadgeCheck,
  Sun, 
  Lock, 
  Bell, 
  Eye, 
  User, 
  Shield, 
  HelpCircle,
  ArrowLeft,
  SettingsIcon,
  Globe,
  Activity,
  Mail,
  AtSign,
  Heart,
  Megaphone,
  Menu,
  X,
  Monitor,
  ChevronRight,
  AppWindow
} from 'lucide-react';
import useThemeStore from '../stores/themeStore';
import { Switch } from '../components/ui/Switch';

export const SettingsScreen = () => {
  // const isDarkMode = useThemeStore((state) => state.darkMode);
  // const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  const [activeSection, setActiveSection] = useState('general');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 mt-2">
      {/* Mobile Sidebar Overlay */}
      {mobileNavOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* Sidebar - Mobile (Slide-in) */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <SettingsIcon className="w-5 h-5" />
            Settings
          </h2>
          <button 
            onClick={() => setMobileNavOpen(false)}
            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100%-60px)]">
          {SETTINGS_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setMobileNavOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 ${
                activeSection === section.id
                  ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <section.icon className="w-5 h-5" />
              {section.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Sidebar - Desktop */}
      <div className="hidden md:block w-64 border-r border-gray-200 dark:border-gray-800 p-4">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <SettingsIcon className="w-5 h-5" />
          Settings
        </h2>
        
        <nav className="space-y-1">
          {SETTINGS_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 ${
                activeSection === section.id
                  ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <section.icon className="w-5 h-5" />
              {section.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto mb-20">
        {/* Mobile Header */}
        <header className="md:hidden sticky top-0 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 border-b border-gray-200 dark:border-gray-800 flex items-center gap-4">
          <button onClick={() => window.history.back()}>
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => setMobileNavOpen(true)}
            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Menu size={20} className='font-bold' />
          </button>
          <h1 className="text-xl font-bold">Settings</h1>
        </header>

        <div className="p-6 max-w-3xl mx-auto">
          {/* Dynamic Section Content */}
          {activeSection === 'general' && <GeneralSettings />}
          {activeSection === 'privacy' && <PrivacySettings />}
          {activeSection === 'notifications' && <NotificationSettings />}
          {activeSection === 'account' && <AccountSettings />}
          {activeSection === 'security' && <SecuritySettings />}
          {activeSection === 'help' && <HelpSettings />}
        </div>
      </div>
    </div>
  );
};


// Settings Sections Config
const SETTINGS_SECTIONS = [
  { id: 'general', label: 'General', icon: SettingsIcon },
  { id: 'privacy', label: 'Privacy', icon: Lock },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'account', label: 'Account', icon: User },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'help', label: 'Help', icon: HelpCircle },
];

const GeneralSettings = () => {
  const isDarkMode = useThemeStore(state => state.darkMode);
  const toggleDarkMode = useThemeStore(state => state.toggleDarkMode);
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
          {/* <span className='h-2 w-2 bg-green-200 rounded'></span> */}
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

type PrivacySettingKey = 'showOnlineStatus' | 'allowTracking' | 'hideProfile';

const PrivacySettings = () => {
  const [privacySettings, setPrivacySettings] = useState<Record<PrivacySettingKey, boolean>>({
    showOnlineStatus: true,
    allowTracking: false,
    hideProfile: false,
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <Lock className="w-6 h-6" />
        Privacy
      </h2>

      <div className="space-y-4">
        {(Object.entries(PRIVACY_OPTIONS) as [PrivacySettingKey, typeof PRIVACY_OPTIONS[PrivacySettingKey]][]).map(([key, option]) => (
          <div 
            key={key}
            className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3">
              <option.icon className="w-5 h-5" />
              <div>
                <h3 className="font-medium">{option.label}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {option.description}
                </p>
              </div>
            </div>
            <Switch
              checked={privacySettings[key]}
              onCheckedChange={(checked) => 
                setPrivacySettings(prev => ({ ...prev, [key]: checked }))
              }
              className="data-[state=checked]:bg-primary-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const PRIVACY_OPTIONS = {
  showOnlineStatus: {
    label: "Show Online Status",
    description: "Allow others to see when you're online",
    icon: Eye,
  },
  allowTracking: {
    label: "Analytics Tracking",
    description: "Help improve Echonet by sharing usage data",
    icon: Activity,
  },
  hideProfile: {
    label: "Hide Profile",
    description: "Make your profile invisible to non-friends",
    icon: User,
  },
};

type NotificationSettingKey = 'messages' | 'mentions' | 'reactions' | 'announcements';

const NotificationSettings = () => {
  const [notificationSettings, setNotificationSettings] = useState<Record<NotificationSettingKey, boolean>>({
    messages: true,
    mentions: true,
    reactions: false,
    announcements: true,
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <Bell className="w-6 h-6" />
        Notifications
      </h2>

      <div className="space-y-4">
        <h3 className="font-medium text-lg">Push Notifications</h3>
        {(Object.entries(NOTIFICATION_OPTIONS) as [NotificationSettingKey, typeof NOTIFICATION_OPTIONS[NotificationSettingKey]][]).map(([key, option]) => (
          <div 
            key={key}
            className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3">
              <option.icon className="w-5 h-5" />
              <div>
                <h3 className="font-medium">{option.label}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {option.description}
                </p>
              </div>
            </div>
            <Switch
              checked={notificationSettings[key]}
              onCheckedChange={(checked) => 
                setNotificationSettings(prev => ({ ...prev, [key]: checked }))
              }
              className="data-[state=checked]:bg-primary-500"
            />
          </div>
        ))}

        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <h3 className="font-medium mb-2">Notification Sound</h3>
          <select className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <option>Default</option>
            <option>Chime</option>
            <option>None</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const NOTIFICATION_OPTIONS = {
  messages: {
    label: "New Messages",
    description: "When someone sends you a message",
    icon: Mail,
  },
  mentions: {
    label: "Mentions",
    description: "When someone mentions you",
    icon: AtSign,
  },
  reactions: {
    label: "Reactions",
    description: "When someone reacts to your post",
    icon: Heart,
  },
  announcements: {
    label: "Announcements",
    description: "Important updates from Echonet",
    icon: Megaphone,
  },
};

const AccountSettings = () => {
  const [user, setUser] = useState({
    username: "johndoe",
    email: "john@example.com",
    phone: "+1234567890",
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <User className="w-6 h-6" />
        Account
      </h2>

      <div className="space-y-4">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <h3 className="font-medium mb-4">Profile Information</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                Username
              </label>
              <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                value={user.email}
                className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={user.phone}
                onChange={(e) => setUser({...user, phone: e.target.value})}
                className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <h3 className="font-medium mb-4">Danger Zone</h3>
          <button className="w-full py-2 px-4 bg-red-500/10 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-500/20 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

type SecuritySettingKey = 'emailVerification' | 'passwordChangeRequired' | 'loginAlerts' | 'backupCodes';

const SecuritySettings = () => {
  const [securitySettings, setSecuritySettings] = useState<Record<SecuritySettingKey | 'twoFactorAuth', boolean>>({
    twoFactorAuth: true,
    emailVerification: true,
    passwordChangeRequired: false,
    loginAlerts: true,
    backupCodes: false,
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <Shield className="w-6 h-6 text-primary-500" />
        Security
      </h2>

      <div className="space-y-4">
        {/* Two-Factor Authentication */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
                <Key className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Add an extra layer of security to your account
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded-full">
                    <BadgeCheck className="w-3 h-3" />
                    SMS Enabled
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded-full">
                    <Mail className="w-3 h-3" />
                    Email Enabled
                  </span>
                </div>
              </div>
            </div>
            <Switch
              checked={securitySettings.twoFactorAuth}
              onCheckedChange={(checked) => 
                setSecuritySettings(prev => ({ ...prev, twoFactorAuth: checked }))
              }
            />
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
            <button className="w-full flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <span className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Change phone number
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <span className="flex items-center gap-2">
                <ClipboardList className="w-4 h-4" />
                View backup codes
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Security Options */}
        {(Object.entries(SECURITY_OPTIONS) as [SecuritySettingKey, typeof SECURITY_OPTIONS[SecuritySettingKey]][]).map(([key, option]) => (
          <div 
            key={key}
            className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <option.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium">{option.label}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {option.description}
                </p>
              </div>
            </div>
            <Switch
              checked={securitySettings[key]}
              onCheckedChange={(checked) => 
                setSecuritySettings(prev => ({ ...prev, [key]: checked }))
              }
            />
          </div>
        ))}

        {/* Active Sessions */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <h3 className="font-medium mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Active Sessions
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <Monitor className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium">MacBook Pro</p>
                  <p className="text-xs text-gray-500">
                    Safari • New York, USA • Just now
                  </p>
                </div>
              </div>
              <button className="text-red-500 hover:text-red-600 text-sm font-medium">
                Revoke
              </button>
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium">iPhone 15</p>
                  <p className="text-xs text-gray-500">
                    Chrome • London, UK • 2 hours ago
                  </p>
                </div>
              </div>
              <button className="text-red-500 hover:text-red-600 text-sm font-medium">
                Revoke
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SECURITY_OPTIONS = {
  emailVerification: {
    label: "Email Verification",
    description: "Require email confirmation for sensitive actions",
    icon: Mail,
  },
  passwordChangeRequired: {
    label: "Password Change",
    description: "Require password change every 90 days",
    icon: Lock,
  },
  loginAlerts: {
    label: "Login Alerts",
    description: "Get notified about new logins",
    icon: Bell,
  },
  backupCodes: {
    label: "Backup Codes",
    description: "Generate one-time backup codes",
    icon: ClipboardList,
  },
};

const HelpSettings = () => {
  const HELP_ITEMS = [
    {
      icon: BookOpen,
      title: "Help Center",
      description: "Browse our knowledge base",
      action: "Visit"
    },
    {
      icon: Mail,
      title: "Contact Support",
      description: "Email our support team",
      action: "Contact"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with a support agent",
      action: "Start Chat"
    },
    {
      icon: AlertTriangle,
      title: "Report a Problem",
      description: "Found a bug or issue?",
      action: "Report"
    }
  ];

  const FAQ_ITEMS = [
    "How to change my password?",
    "How to enable two-factor authentication?",
    "How to delete my account?",
    "How to manage notifications?"
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <HelpCircle className="w-6 h-6 text-primary-500" />
        Help & Support
      </h2>

      <div className="space-y-4">
        {/* Help Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {HELP_ITEMS.map((item, index) => (
            <div 
              key={index}
              className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
                  <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.description}
                  </p>
                </div>
                <button className="text-primary-500 hover:text-primary-600 text-sm font-medium flex items-center gap-1">
                  {item.action}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <h3 className="font-medium mb-3">Frequently Asked Questions</h3>
          <div className="space-y-2">
            {FAQ_ITEMS.map((question, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <span>{question}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* App Info */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-center">
          <div className="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mb-3">
            <AppWindow className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="font-medium">Echonet Mobile</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Version 2.4.1 • Build 472
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <button className="text-sm text-primary-500 hover:text-primary-600 font-medium">
              Terms of Service
            </button>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <button className="text-sm text-primary-500 hover:text-primary-600 font-medium">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};