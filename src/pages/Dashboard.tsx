import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Palette, Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import ChatbotTemplates from "@/components/ChatbotTemplates";
import PricingContent from "@/components/PricingContent";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [templateSearch, setTemplateSearch] = useState("");
  const location = useLocation();

  // Check if we're on pricing page
  const isPricingPage = location.pathname === "/pricing";

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
        isMobileOpen={mobileMenuOpen}
        onMobileToggle={toggleMobileMenu}
      />

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
          {/* Mobile Header */}
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-slate-400 hover:text-white hover:bg-slate-800 p-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CV</span>
              </div>
              <span className="text-white font-bold text-lg">CHATBOTVIET</span>
            </div>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>

          {isPricingPage ? (
            // Show pricing content
            <PricingContent />
          ) : location.pathname === "/dashboard/profile" ? (
            // Show profile content
            <div className="p-8 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                <h1 className="text-3xl font-bold mb-6">Thông tin cá nhân</h1>
                <p className="text-slate-400 mb-8">
                  Quản lý thông tin cá nhân và cài đặt tài khoản của bạn.
                </p>

                <div className="bg-slate-800 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Thông tin tài khoản
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Họ và tên
                      </label>
                      <div className="bg-slate-700 rounded-md p-3 text-white">
                        Huỳnh Mạc Tử Khoa
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email
                      </label>
                      <div className="bg-slate-700 rounded-md p-3 text-white">
                        tukhoahuynh@example.com
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Gói dịch vụ
                      </label>
                      <div className="bg-slate-700 rounded-md p-3 text-white">
                        Gói dùng thử
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : location.pathname.includes("/dashboard/") ? (
            // Show other dashboard pages
            <div className="p-8 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-center"
              >
                <h1 className="text-3xl font-bold mb-6">
                  {location.pathname === "/dashboard/train" &&
                    "Đào tạo chatbot"}
                  {location.pathname === "/dashboard/messages" &&
                    "Quản lý tin nhắn"}
                  {location.pathname === "/dashboard/analytics" && "Thống kê"}
                  {location.pathname === "/dashboard/transactions" &&
                    "Lịch sử giao dịch"}
                  {location.pathname === "/dashboard/affiliate" && "Affiliate"}
                  {location.pathname === "/dashboard/support" &&
                    "Hỗ trợ yêu cầu ticket"}
                  {location.pathname === "/dashboard/usage" &&
                    "Hạn mức sử dụng"}
                  {location.pathname === "/dashboard/settings" && "Cài đặt"}
                </h1>
                <p className="text-slate-400 text-lg">
                  Trang này đang được phát triển. Vui lòng quay lại sau.
                </p>
              </motion.div>
            </div>
          ) : (
            // Show regular dashboard content
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
                    <h1 className="text-2xl font-bold text-white">
                      Tạo chatbot
                    </h1>
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
                    <h2 className="text-xl font-semibold text-white">
                      Chọn mẫu
                    </h2>
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
          )}
        </div>
      </motion.main>
    </div>
  );
};

export default Dashboard;
