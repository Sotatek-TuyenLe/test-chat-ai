import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Search,
  Palette,
  Menu,
  User,
  ChevronDown,
  Grid3X3,
  List,
  Bot,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import ChatbotTemplates from "@/components/ChatbotTemplates";
import PricingContent from "@/components/PricingContent";
import ChatbotGrid from "@/components/ChatbotGrid";
import ChatbotList from "@/components/ChatbotList";
import CreateChatbotModal from "@/components/CreateChatbotModal";
import MessagesContent from "@/components/MessagesContent";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [templateSearch, setTemplateSearch] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const location = useLocation();

  // Check if we're on pricing page
  const isPricingPage = location.pathname === "/pricing";
  const isTrainPage = location.pathname === "/dashboard/train";

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
            <div className="p-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h1 className="text-3xl font-bold text-white mb-8">
                  Thông tin cá nhân
                </h1>

                {/* Profile Picture Section */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">
                    Hình đại diện
                  </h2>
                  <div className="flex items-start space-x-6">
                    <div className="w-32 h-32 bg-slate-300 rounded-lg flex items-center justify-center">
                      <div className="w-20 h-20 bg-slate-500 rounded-full flex items-center justify-center">
                        <User className="w-12 h-12 text-slate-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-400 mb-4">
                        Dung lượng file cho phép 720x720 pixel, cao nhất là 1MB
                      </p>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        Lưu thay đổi
                      </Button>
                    </div>
                  </div>
                </div>

                {/* User Details Section */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">
                    Chi tiết người dùng
                  </h2>
                  <div className="bg-slate-800 rounded-lg border border-slate-700">
                    {/* Name */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-700">
                      <div className="flex-1">
                        <span className="block text-sm text-slate-400 mb-1">
                          Tên
                        </span>
                        <span className="text-white font-medium">
                          Huynh Mac Tu Khoa
                        </span>
                      </div>
                      <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                        Chỉnh sửa
                      </button>
                    </div>

                    {/* Language */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-700">
                      <div className="flex-1">
                        <span className="block text-sm text-slate-400 mb-1">
                          Ngôn ngữ
                        </span>
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                            <span className="text-xs text-yellow-400">★</span>
                          </div>
                          <span className="text-white font-medium">
                            Tiếng Việt
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* User ID */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-700">
                      <div className="flex-1">
                        <span className="block text-sm text-slate-400 mb-1">
                          ID người dùng
                        </span>
                        <span className="text-white font-medium font-mono">
                          684065b47c1f5a373c50601a
                        </span>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-700">
                      <div className="flex-1">
                        <span className="block text-sm text-slate-400 mb-1">
                          Trạng thái
                        </span>
                        <span className="text-green-400 font-medium">
                          Đang hoạt động
                        </span>
                      </div>
                    </div>

                    {/* Password */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-700">
                      <div className="flex-1">
                        <span className="block text-sm text-slate-400 mb-1">
                          Mật khẩu
                        </span>
                        <span className="text-white font-medium">
                          •••••••••
                        </span>
                      </div>
                      <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                        Chỉnh sửa
                      </button>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-700">
                      <div className="flex-1">
                        <span className="block text-sm text-slate-400 mb-1">
                          E-mail
                        </span>
                        <span className="text-white font-medium">
                          khoa.huynh.spm@gmail.com
                        </span>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center justify-between p-4">
                      <div className="flex-1">
                        <span className="block text-sm text-slate-400 mb-1">
                          Số điện thoại
                        </span>
                        <span className="text-white font-medium">
                          0945545152
                        </span>
                      </div>
                      <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                        Chỉnh sửa
                      </button>
                    </div>
                  </div>
                </div>

                {/* Company Information Section */}
                <div className="space-y-4">
                  <details className="group">
                    <summary className="flex items-center justify-between p-4 bg-slate-800 rounded-lg border border-slate-700 cursor-pointer hover:bg-slate-750 transition-colors">
                      <span className="text-white font-medium">
                        Thông tin công ty (Nếu bạn muốn xuất hóa đơn tài chính)
                      </span>
                      <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                      <p className="text-slate-400 text-sm">
                        Thêm thông tin công ty để xuất hóa đơn VAT và các tài
                        liệu tài chính khác.
                      </p>
                      <Button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                        Thêm thông tin công ty
                      </Button>
                    </div>
                  </details>
                </div>
              </motion.div>
            </div>
          ) : isTrainPage ? (
            // Show chatbot training page
            <div className="p-8 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center">
                      <Bot className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-white">
                        Đào tạo chatbot
                      </h1>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    {/* View Toggle */}
                    <div className="flex items-center bg-slate-800 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded transition-colors duration-200 ${
                          viewMode === "grid"
                            ? "bg-white text-slate-900"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Grid3X3 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded transition-colors duration-200 ${
                          viewMode === "list"
                            ? "bg-white text-slate-900"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <List className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Create Button */}
                    <Button
                      onClick={() => setCreateModalOpen(true)}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Tạo chatbot
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="min-h-[400px]">
                  {viewMode === "grid" ? <ChatbotGrid /> : <ChatbotList />}
                </div>
              </motion.div>

              {/* Create Chatbot Modal */}
              <CreateChatbotModal
                open={createModalOpen}
                onOpenChange={setCreateModalOpen}
              />
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
