import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  {
    icon: BarChart3,
    label: "Bảng điều khiển",
    href: "/dashboard",
    active: false,
  },
  {
    icon: Bot,
    label: "Tạo Chatbot AI",
    href: "/dashboard/create",
    active: true,
  },
  {
    icon: BookOpen,
    label: "Kho tri thức",
    href: "/dashboard/knowledge",
    active: false,
  },
  {
    icon: HomeIcon,
    label: "Trang mẫu",
    href: "/dashboard/templates",
    active: false,
  },
  {
    icon: Settings,
    label: "Tích hợp",
    href: "/dashboard/integrations",
    active: false,
  },
];

const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.aside
      initial={false}
      animate={{
        width: isCollapsed ? 80 : 280,
      }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="relative h-screen bg-slate-900 border-r border-slate-800 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
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
              <span className="text-white font-bold text-lg">CHATBOTVIET</span>
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="text-slate-400 hover:text-white hover:bg-slate-800 p-2"
        >
          <motion.div
            animate={{ rotate: isCollapsed ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronLeft className="h-4 w-4" />
          </motion.div>
        </Button>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-slate-800">
        <AnimatePresence mode="wait">
          {!isCollapsed ? (
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
        <ul className="space-y-2">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    "hover:bg-slate-800 group",
                    {
                      "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-white":
                        item.active,
                      "text-slate-400 hover:text-white": !item.active,
                    },
                  )}
                >
                  <IconComponent
                    className={cn("h-5 w-5 flex-shrink-0", {
                      "text-purple-400": item.active,
                    })}
                  />
                  <AnimatePresence mode="wait">
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="font-medium"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </a>
              </motion.li>
            );
          })}
        </ul>

        {/* No chatbots message */}
        <AnimatePresence mode="wait">
          {!isCollapsed && (
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
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-purple-600 text-white text-sm">
              TL
            </AvatarFallback>
          </Avatar>
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex-1 min-w-0"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-medium">tuyên lê</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
