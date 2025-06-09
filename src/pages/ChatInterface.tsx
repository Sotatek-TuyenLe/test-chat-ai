import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Send,
  ArrowLeft,
  MessageSquare,
  Settings,
  Image,
  Tags,
  Database,
  Zap,
  Globe,
  ExternalLink,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";

interface Message {
  id: number;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatInterface = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUserForm, setShowUserForm] = useState(true);
  const [userInfo, setUserInfo] = useState({ name: "", phone: "" });
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleStartChat = () => {
    if (userInfo.name.trim() && userInfo.phone.trim()) {
      setShowUserForm(false);
      // Add welcome message
      const welcomeMessage: Message = {
        id: 1,
        content: `Xin chào ${userInfo.name}! Tôi có thể giúp gì cho bạn hôm nay?`,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  };

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        content: currentMessage,
        isBot: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setCurrentMessage("");

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          content: "Cảm ơn bạn đã liên hệ! Tôi đang xử lý yêu cầu của bạn...",
          isBot: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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
      <div className="flex-1 overflow-hidden flex">
        {/* Left Sidebar Menu */}
        <div className="w-52 bg-slate-800 border-r border-slate-700 hidden lg:block">
          {/* Header */}
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.history.back()}
                className="p-2 text-slate-400 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-slate-600 text-white">
                  D
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-white font-semibold">dev</h2>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-4">
            <div className="space-y-2">
              {/* Chat Interface */}
              <Button
                variant="ghost"
                className="w-full justify-start text-white bg-purple-600 hover:bg-purple-700 h-10 px-3"
              >
                <MessageSquare className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="flex-1 text-left">Chat với</span>
              </Button>

              {/* Sub Menu Items */}
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-10 px-3"
              >
                <span className="flex-1 text-left">Tùy chọn</span>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-10 px-3"
              >
                <Settings className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="flex-1 text-left">Tổng quan</span>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-10 px-3"
              >
                <Image className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="flex-1 text-left">Thư viện ảnh</span>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-10 px-3"
              >
                <MessageSquare className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="flex-1 text-left">Tin nhắn nhanh</span>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-10 px-3"
              >
                <Tags className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="flex-1 text-left">Quản lý tags</span>
              </Button>

              <div className="border-t border-slate-600 my-4"></div>

              {/* Data Section */}
              <div className="text-slate-400 text-sm font-medium mb-3 px-3">
                Dữ liệu
              </div>
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-10 px-3"
              >
                <Database className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="flex-1 text-left">Dữ liệu huấn luyện</span>
              </Button>

              <div className="border-t border-slate-600 my-4"></div>

              {/* Operation Section */}
              <div className="text-slate-400 text-sm font-medium mb-3 px-3">
                Operation
              </div>
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-10 px-3"
              >
                <Zap className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="flex-1 text-left">Kịch bản chốt sales</span>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-10 px-3"
              >
                <Database className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="flex-1 text-left">Quản lý sản phẩm</span>
              </Button>

              <div className="border-t border-slate-600 my-4"></div>

              {/* Development Section */}
              <div className="text-slate-400 text-sm font-medium mb-3 px-3">
                Development
              </div>
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-10 px-3"
              >
                <ExternalLink className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="flex-1 text-left">Tool Ads Facebook</span>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-10 px-3"
              >
                <Globe className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="flex-1 text-left">Website</span>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-10 px-3"
              >
                <Settings className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="flex-1 text-left">Tích hợp nền tảng</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Header */}
          <div className="p-4 border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-slate-900">
                Chat với bot
              </h1>
              <div className="text-xs text-slate-500">
                Bạn còn 3 ngày sử dụng gói dùng thử.
                <a
                  href="/pricing"
                  className="text-purple-600 hover:text-purple-700 ml-1"
                >
                  Nâng cấp ngay ↗
                </a>
              </div>
            </div>
          </div>

          {/* User Info Form Modal */}
          <AnimatePresence>
            {showUserForm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center z-50"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
                >
                  <h2 className="text-xl font-bold text-slate-900 mb-4">
                    Chat với bot
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Vui lòng cung cấp một số thông tin sau đây để chúng tôi có
                    thể hỗ trợ tốt hơn.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-slate-700 mb-2 block">
                        Họ Tên <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        placeholder="Nhập họ tên của bạn..."
                        value={userInfo.name}
                        onChange={(e) =>
                          setUserInfo((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="border-slate-300"
                      />
                    </div>

                    <div>
                      <Label className="text-slate-700 mb-2 block">
                        Số điện thoại <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        placeholder="Nhập số điện thoại của bạn..."
                        value={userInfo.phone}
                        onChange={(e) =>
                          setUserInfo((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="border-slate-300"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleStartChat}
                    disabled={!userInfo.name.trim() || !userInfo.phone.trim()}
                    className="w-full mt-6 bg-purple-600 hover:bg-purple-700 h-12 text-base font-medium"
                  >
                    Bắt đầu
                  </Button>

                  <p className="text-center text-xs text-slate-400 mt-4">
                    Powered by Preny.ai
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.isBot ? "" : "flex-row-reverse space-x-reverse"}`}
                >
                  {message.isBot && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-purple-600 text-white text-sm">
                        B
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.isBot
                        ? "bg-slate-100 text-slate-900"
                        : "bg-purple-600 text-white"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-slate-200">
            <div className="flex space-x-2">
              <Input
                placeholder="Nhập tin nhắn của bạn..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 border-slate-300"
                disabled={showUserForm}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!currentMessage.trim() || showUserForm}
                className="bg-purple-600 hover:bg-purple-700 px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
