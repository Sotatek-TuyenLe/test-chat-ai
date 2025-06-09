import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Globe, Plus, RotateCcw, MessageCircle } from "lucide-react";
import Sidebar from "@/components/Sidebar";

const PlatformIntegrations = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domainInput, setDomainInput] = useState("");
  const [addedDomains, setAddedDomains] = useState<string[]>([]);

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleBack = () => {
    navigate("/chatbot/1/settings");
  };

  const handleAddDomain = () => {
    if (domainInput.trim() && !addedDomains.includes(domainInput.trim())) {
      setAddedDomains([...addedDomains, domainInput.trim()]);
      setDomainInput("");
    }
  };

  const handleRemoveDomain = (domain: string) => {
    setAddedDomains(addedDomains.filter((d) => d !== domain));
  };

  const handleAddFanpage = () => {
    console.log("Adding Facebook page...");
  };

  const handleAddZalo = () => {
    console.log("Adding Zalo integration...");
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
            <Plus className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CV</span>
            </div>
            <span className="text-white font-bold text-lg">CHATBOTVIET</span>
          </div>
          <div className="w-10"></div>
        </div>

        <div className="p-8 max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-white">Tích Hợp</h1>
                <p className="text-slate-400">
                  Tích hợp Chatbot với các nền tảng
                </p>
              </div>
            </div>
          </motion.div>

          {/* Integrations */}
          <div className="space-y-8">
            {/* Website Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Globe className="h-5 w-5 mr-3 text-blue-400" />
                    Website ({addedDomains.length}/10)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Domain Input */}
                  <div className="space-y-3">
                    <div className="flex space-x-3">
                      <Input
                        placeholder="Nhập tên miền"
                        value={domainInput}
                        onChange={(e) => setDomainInput(e.target.value)}
                        className="flex-1 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        onKeyDown={(e) =>
                          e.key === "Enter" && handleAddDomain()
                        }
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 text-slate-400 hover:text-white"
                      >
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-slate-400">
                      Thêm tên miền bạn muốn nhúng Chatbot vào. Ví dụ:
                      https://chatbotviet.com
                    </p>
                  </div>

                  {/* Added Domains */}
                  <div className="space-y-3">
                    <h3 className="text-white font-medium flex items-center">
                      Tên miền đã thêm
                      <span className="ml-2 text-xs text-slate-400">ℹ️</span>
                    </h3>
                    {addedDomains.length === 0 ? (
                      <Card className="bg-slate-700 border-slate-600">
                        <CardContent className="p-6">
                          <p className="text-center text-slate-400">
                            Chưa có tên miền nào được thêm
                          </p>
                        </CardContent>
                      </Card>
                    ) : (
                      <div className="space-y-2">
                        {addedDomains.map((domain, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-slate-700 rounded-lg"
                          >
                            <span className="text-white">{domain}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveDomain(domain)}
                              className="text-red-400 hover:text-red-300"
                            >
                              Xóa
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Facebook Fanpage Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <svg
                      className="h-5 w-5 mr-3 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Fanpage (0/1)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Card className="bg-slate-700 border-slate-600">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <p className="text-slate-400 mb-4">
                          Chưa có Trang được kết nối
                        </p>
                        <Button
                          onClick={handleAddFanpage}
                          className="bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Thêm trang mới
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </motion.div>

            {/* Zalo Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <MessageCircle className="h-5 w-5 mr-3 text-blue-500" />
                    Zalo (0/1)
                    <Badge className="ml-3 bg-blue-600 text-white text-xs">
                      New
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Card className="bg-slate-700 border-slate-600">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <p className="text-slate-400 mb-4">
                          Chưa có tài khoản Zalo được kết nối
                        </p>
                        <Button
                          onClick={handleAddZalo}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Kết nối Zalo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </motion.div>

            {/* WhatsApp Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <MessageCircle className="h-5 w-5 mr-3 text-green-500" />
                    WhatsApp (0/1)
                    <Badge className="ml-3 bg-green-600 text-white text-xs">
                      Coming Soon
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Card className="bg-slate-700 border-slate-600">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <p className="text-slate-400 mb-4">
                          Tính năng đang được phát triển
                        </p>
                        <Button
                          disabled
                          className="bg-gray-600 text-gray-400 cursor-not-allowed"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Sắp có
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformIntegrations;
