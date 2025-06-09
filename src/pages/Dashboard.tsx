import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Palette } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import ChatbotTemplates from "@/components/ChatbotTemplates";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [templateSearch, setTemplateSearch] = useState("");

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />

      {/* Main Content */}
      <motion.main
        initial={false}
        animate={{
          marginLeft: 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="flex-1 flex flex-col overflow-hidden"
      >
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-7xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-10 w-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Plus className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Tạo chatbot</h1>
                  <p className="text-slate-400">
                    Thiết kế chatbot AI cá nhân thông minh theo nhu cầu riêng
                    của bạn
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200">
                  <Plus className="h-4 w-4 mr-2" />
                  Tạo chatbot mới
                </Button>
              </motion.div>
            </motion.div>

            {/* Template Selection Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Templates Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Palette className="h-5 w-5 text-purple-400" />
                  <h2 className="text-xl font-semibold text-white">Chọn mẫu</h2>
                </div>
              </div>

              {/* Template Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Tìm kiếm mẫu"
                  value={templateSearch}
                  onChange={(e) => setTemplateSearch(e.target.value)}
                  className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-purple-500"
                />
              </div>

              {/* Filter Tags */}
              <div className="flex flex-wrap gap-2">
                {["Tư vấn", "CSKH", "hr"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer transition-colors duration-200 px-3 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Templates */}
              <ChatbotTemplates />
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Dashboard;
