import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  BarChart3,
  Bot,
  BookOpen,
  Home as HomeIcon,
  Settings,
  Search,
  ChevronLeft,
  Plus,
  User,
  ChevronDown,
  MessageSquare,
  TrendingUp,
  History,
  Users,
  HelpCircle,
  Gauge,
  Crown,
  ChevronRight,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobileOpen: boolean;
  onMobileToggle: () => void;
}

const navigationItems = [
  {
    icon: User,
    label: "Thông tin cá nhân",
    href: "/dashboard/profile",
    id: "profile",
  },
  {
    icon: Bot,
    label: "Đào tạo chatbot",
    href: "/dashboard/train",
    id: "train",
  },
  {
    icon: MessageSquare,
    label: "Quản lý tin nhắn",
    href: "/dashboard/messages",
    id: "messages",
  },
  {
    icon: TrendingUp,
    label: "Thống kê",
    href: "/dashboard/analytics",
    id: "analytics",
  },
  {
    icon: History,
    label: "Lịch sử giao dịch",
    href: "/dashboard/transactions",
    id: "transactions",
  },
  {
    icon: Users,
    label: "Affiliate",
    href: "/dashboard/affiliate",
    id: "affiliate",
  },
  {
    icon: HelpCircle,
    label: "Hỗ trợ yêu cầu ticket",
    href: "/dashboard/support",
    id: "support",
  },
  {
    icon: Gauge,
    label: "Hạn mức sử dụng",
    href: "/dashboard/usage",
    id: "usage",
  },
  {
    icon: Crown,
    label: "Nâng cấp",
    href: "/pricing",
    id: "pricing",
    special: true,
  },
  {
    icon: Settings,
    label: "Cài đặt",
    href: "/dashboard/settings",
    id: "settings",
    expandable: true,
  },
];

const Sidebar = ({
  isCollapsed,
  onToggle,
  isMobileOpen,
  onMobileToggle,
}: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("messages"); // Default to messages
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Determine active tab based on current URL
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/pricing") {
      setActiveTab("pricing");
    } else if (currentPath.includes("/dashboard/profile")) {
      setActiveTab("profile");
    } else if (currentPath.includes("/dashboard/train")) {
      setActiveTab("train");
    } else if (currentPath.includes("/dashboard/analytics")) {
      setActiveTab("analytics");
    } else if (currentPath.includes("/dashboard/transactions")) {
      setActiveTab("transactions");
    } else if (currentPath.includes("/dashboard/affiliate")) {
      setActiveTab("affiliate");
    } else if (currentPath.includes("/dashboard/support")) {
      setActiveTab("support");
    } else if (currentPath.includes("/dashboard/usage")) {
      setActiveTab("usage");
    } else if (currentPath.includes("/dashboard/settings")) {
      setActiveTab("settings");
    } else {
      setActiveTab("messages"); // Default to messages for dashboard
    }
  }, [location.pathname]);

  const handleNavClick = (item: any, event: React.MouseEvent) => {
    event.preventDefault();
    setActiveTab(item.id);

    // Close mobile menu when item is clicked
    if (isMobile) {
      onMobileToggle();
    }

    // Use React Router navigation for smooth transitions
    navigate(item.href);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onMobileToggle}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isMobile ? (isMobileOpen ? 280 : 0) : isCollapsed ? 80 : 280,
          x: isMobile ? (isMobileOpen ? 0 : -280) : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
        className={cn("bg-slate-900 border-r border-slate-800 flex flex-col", {
          "fixed inset-y-0 left-0 z-50 lg:relative lg:inset-auto": isMobile,
          "relative h-screen": !isMobile,
        })}
        style={{
          height: isMobile ? "100vh" : "auto",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <AnimatePresence mode="wait">
            {(!isCollapsed || isMobile) && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-3"
              >
                <div className="h-8 w-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CV</span>
                </div>
                <span className="text-white font-bold text-lg">
                  CHATBOTVIET
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            variant="ghost"
            size="sm"
            onClick={isMobile ? onMobileToggle : onToggle}
            className="text-slate-400 hover:text-white hover:bg-slate-800 p-2"
          >
            {isMobile ? (
              <X className="h-4 w-4" />
            ) : (
              <motion.div
                animate={{ rotate: isCollapsed ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.div>
            )}
          </Button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-800">
          <AnimatePresence mode="wait">
            {!isCollapsed || isMobile ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="relative"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Tìm kiếm chatbot..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-purple-500"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-slate-400 hover:text-white"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;

              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={(e) => handleNavClick(item, e)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200",
                      "hover:bg-slate-800 group relative",
                      {
                        "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-white":
                          isActive && !item.special,
                        "bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 text-yellow-300":
                          isActive && item.special,
                        "text-slate-400 hover:text-white":
                          !isActive && !item.special,
                        "text-yellow-400 hover:text-yellow-300":
                          !isActive && item.special,
                      },
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent
                        className={cn("h-5 w-5 flex-shrink-0", {
                          "text-purple-400": isActive && !item.special,
                          "text-yellow-300": isActive && item.special,
                          "text-yellow-400": !isActive && item.special,
                        })}
                      />
                      <AnimatePresence mode="wait">
                        {(!isCollapsed || isMobile) && (
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            className="font-medium text-left"
                          >
                            {item.label}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Expandable arrow for settings */}
                    {item.expandable && (!isCollapsed || isMobile) && (
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    )}
                  </button>
                </motion.li>
              );
            })}
          </ul>

          {/* No chatbots message */}
          <AnimatePresence mode="wait">
            {(!isCollapsed || isMobile) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-center"
              >
                <p className="text-slate-500 text-sm">Không có chatbot nào</p>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center space-x-3 mb-4">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-purple-600 text-white text-sm">
                HM
              </AvatarFallback>
            </Avatar>
            <AnimatePresence mode="wait">
              {(!isCollapsed || isMobile) && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 min-w-0"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">
                        Huỳnh Mạc Tử Khoa
                      </p>
                      <p className="text-slate-400 text-xs">gói dùng thử</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Document Usage Progress - Only show when expanded */}
          <AnimatePresence mode="wait">
            {(!isCollapsed || isMobile) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="mb-4 bg-slate-800 rounded-lg p-3"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-400">Document</span>
                  <span className="text-sm text-white font-medium">
                    35 / 20
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Logout Button - Only show on mobile when expanded */}
          <AnimatePresence mode="wait">
            {isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  onClick={handleLogout}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Đăng xuất
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
