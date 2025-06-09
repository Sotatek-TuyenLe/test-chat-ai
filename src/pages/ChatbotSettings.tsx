import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  MessageSquare,
  Settings,
  Image,
  Tags,
  Database,
  Zap,
  Globe,
  Palette,
  Trash2,
  ExternalLink,
  Save,
  RotateCcw,
  Info,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";

const ChatbotSettings = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form state
  const [botName, setBotName] = useState("SDQWE");
  const [companyName, setCompanyName] = useState("");
  const [language, setLanguage] = useState("vi");
  const [responseSpeed, setResponseSpeed] = useState("default");
  const [consultationType, setConsultationType] = useState("ecommerce");
  const [themeColor, setThemeColor] = useState("#4608AB");

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleSave = () => {
    console.log("Saving chatbot settings...");
  };

  const handleDelete = () => {
    console.log("Deleting chatbot...");
  };

  const handleBack = () => {
    navigate("/dashboard/train");
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
      <div className="flex-1 overflow-y-auto">
        {/* Mobile Header */}
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="text-slate-400 hover:text-white hover:bg-slate-800 p-2"
          >
            <Settings className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CV</span>
            </div>
            <span className="text-white font-bold text-lg">CHATBOTVIET</span>
          </div>
          <div className="w-10"></div>
        </div>

        <div className="flex h-full">
          {/* Left Sidebar Menu */}
          <div className="w-64 bg-slate-800 border-r border-slate-700 hidden lg:block">
            {/* Header */}
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBack}
                  className="p-2 text-slate-400 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/api/placeholder/40/40" />
                  <AvatarFallback className="bg-red-600 text-white">
                    S
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-white font-semibold">SDQWE</h2>
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

                {/* Sub Menu */}
                <div className="ml-4 space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-9 px-3"
                  >
                    <span className="flex-1 text-left">Tùy chọn</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-purple-400 hover:text-white hover:bg-slate-700 h-9 px-3"
                  >
                    <Settings className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span className="flex-1 text-left">Tổng quan</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-9 px-3"
                  >
                    <Image className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span className="flex-1 text-left">Thư viện ảnh</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-9 px-3"
                  >
                    <MessageSquare className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span className="flex-1 text-left">Tin nhắn nhanh</span>
                    <Badge className="bg-blue-600 text-white text-xs px-2 py-0.5 ml-2">
                      New
                    </Badge>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-9 px-3"
                  >
                    <Tags className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span className="flex-1 text-left">Quản lý tags</span>
                    <Badge className="bg-blue-600 text-white text-xs px-2 py-0.5 ml-2">
                      New
                    </Badge>
                  </Button>
                </div>

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

          {/* Main Content Area */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <h1 className="text-2xl font-bold text-white">Tổng quan</h1>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="outline"
                      className="text-blue-400 border-blue-400"
                    >
                      <Info className="h-3 w-3 mr-1" />
                      Bot version 2
                    </Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-slate-300 border-slate-600"
                    >
                      Toggle
                    </Button>
                  </div>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Save className="h-4 w-4 mr-2" />
                  Lưu thay đổi
                </Button>
              </div>

              {/* Bot Configuration */}
              <div className="space-y-8">
                {/* Basic Info */}
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">
                      Thông tin cơ bản
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-slate-300 mb-2 block">
                          Tên <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          value={botName}
                          onChange={(e) => setBotName(e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-slate-300 mb-2 block">
                          Tên doanh nghiệp{" "}
                          <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Tên doanh nghiệp của bạn"
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                    </div>

                    {/* Avatar and Theme */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-slate-300 mb-2 block">
                          Avatar
                        </Label>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src="/api/placeholder/64/64" />
                            <AvatarFallback className="bg-red-600 text-white text-lg">
                              S
                            </AvatarFallback>
                          </Avatar>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-slate-300 border-slate-600"
                          >
                            Thay đổi
                          </Button>
                        </div>
                      </div>
                      <div>
                        <Label className="text-slate-300 mb-2 block">
                          Theme
                        </Label>
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-12 h-8 rounded border border-slate-600"
                            style={{ backgroundColor: themeColor }}
                          />
                          <Input
                            value={themeColor}
                            onChange={(e) => setThemeColor(e.target.value)}
                            className="bg-slate-700 border-slate-600 text-white font-mono text-sm w-32"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Language */}
                    <div>
                      <Label className="text-slate-300 mb-2 block">
                        Ngôn ngữ trả lời
                      </Label>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vi">🇻🇳 Tiếng Việt</SelectItem>
                          <SelectItem value="en">🇺🇸 English</SelectItem>
                          <SelectItem value="zh">🇨🇳 中文</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Settings */}
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">
                      Cài đặt phản hồi
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label className="text-slate-300 mb-2 block">
                        Tốc độ bot trả lời
                      </Label>
                      <Select
                        value={responseSpeed}
                        onValueChange={setResponseSpeed}
                      >
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="slow">Chậm (mặc định)</SelectItem>
                          <SelectItem value="default">Bình thường</SelectItem>
                          <SelectItem value="fast">Nhanh</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-slate-300 mb-2 block">
                        Cài đặt kiểu tư vấn
                        <Info className="h-4 w-4 inline ml-1 text-slate-400" />
                      </Label>
                      <Select
                        value={consultationType}
                        onValueChange={setConsultationType}
                      >
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ecommerce">Ecommerce</SelectItem>
                          <SelectItem value="service">Dịch vụ</SelectItem>
                          <SelectItem value="education">Giáo dục</SelectItem>
                          <SelectItem value="other">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-slate-400 mt-2">
                        Lượng tư vấn phù hợp với các ngành tư vấn lĩ sản phẩm
                        như: Khóa học, nhà hàng, Khách...
                      </p>
                      <p className="text-sm text-slate-400">
                        Lượng ecommerce phù hợp với các ngành: Thời trang, mỹ
                        phẩm, nội thất, bán lẻ...
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Delete Section */}
                <Card className="bg-slate-800 border-red-600">
                  <CardHeader>
                    <CardTitle className="text-red-400 text-lg">
                      Thời gian nhận từ đồng (phút)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="destructive"
                      onClick={handleDelete}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Xóa
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Chat Preview */}
          <div className="w-72 bg-slate-800 border-l border-slate-700 p-6 hidden xl:block">
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Preview</h3>

              {/* Chat Widget Preview */}
              <div className="bg-white rounded-lg p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-red-600 text-white text-sm">
                      S
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-slate-900">SDQWE</span>
                </div>

                <div className="bg-slate-100 rounded-lg p-3">
                  <p className="text-sm text-slate-700">
                    👋 Hello! How can I help you today?
                  </p>
                </div>

                <div className="text-xs text-slate-500">
                  My email is example@example.com
                </div>

                <Button
                  className="w-full"
                  style={{ backgroundColor: themeColor }}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat với
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSettings;
