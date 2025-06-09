import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Plus,
  X,
  Tag as TagIcon,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  ArrowLeft,
  MessageSquare,
  Settings,
  Image,
  Tags,
  Database,
  Zap,
  ExternalLink,
  Globe,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";

interface Tag {
  id: number;
  name: string;
  color: string;
  lastUpdated: string;
  isVisible: boolean;
}

const TagManagement = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);

  // Form state
  const [tagName, setTagName] = useState("");
  const [tagColor, setTagColor] = useState("#5C13C2");

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleBack = () => {
    navigate("/chatbot/1/settings");
  };

  const handleAddTag = () => {
    if (tagName.trim()) {
      const newTag: Tag = {
        id: Date.now(),
        name: tagName.trim(),
        color: tagColor,
        lastUpdated: new Date().toLocaleDateString("vi-VN"),
        isVisible: true,
      };

      setTags([...tags, newTag]);
      setTagName("");
      setTagColor("#5C13C2");
      setIsAddModalOpen(false);
    }
  };

  const handleEdit = (id: number) => {
    console.log("Edit tag:", id);
  };

  const handleDelete = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const toggleVisibility = (id: number) => {
    setTags(
      tags.map((tag) =>
        tag.id === id ? { ...tag, isVisible: !tag.isVisible } : tag,
      ),
    );
  };

  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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

        <div className="flex h-full">
          {/* Left Sidebar Menu */}
          <div className="w-52 bg-slate-800 border-r border-slate-700 hidden lg:block">
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
                <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
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
                  onClick={() => navigate("/chatbot/1/chat")}
                >
                  <MessageSquare className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="flex-1 text-left">Chat với</span>
                </Button>

                {/* Main Menu Items */}
                <Button
                  variant="ghost"
                  className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-10 px-3"
                >
                  <span className="flex-1 text-left">Tùy chọn</span>
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 h-10 px-3"
                  onClick={() => navigate("/chatbot/1/settings")}
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
                  onClick={() => navigate("/chatbot/1/quick-messages")}
                >
                  <MessageSquare className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="flex-1 text-left">Tin nhắn nhanh</span>
                  <Badge className="bg-blue-600 text-white text-xs px-2 py-0.5 ml-2">
                    New
                  </Badge>
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start text-purple-400 hover:text-white hover:bg-slate-700 h-10 px-3"
                >
                  <Tags className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="flex-1 text-left">Quản lý tags</span>
                  <Badge className="bg-blue-600 text-white text-xs px-2 py-0.5 ml-2">
                    New
                  </Badge>
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
                  onClick={() => navigate("/chatbot/1/integrations")}
                >
                  <Settings className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="flex-1 text-left">Tích hợp nền tảng</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white">
            <div className="p-8 max-w-7xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-2xl font-bold text-slate-900 mb-2">
                  Quản lý tags
                </h1>
              </motion.div>

              {/* Search and Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 space-y-4"
              >
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Label className="text-slate-700 mb-2 block">
                      Tìm kiếm
                    </Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Tìm kiếm theo tên"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 border-slate-300"
                      />
                    </div>
                  </div>
                  <div className="flex items-end gap-3">
                    <Button variant="outline" className="h-10">
                      <Filter className="h-4 w-4 mr-2" />
                      Lọc
                    </Button>
                    <Button
                      onClick={() => setIsAddModalOpen(true)}
                      className="h-10 bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Thêm mới
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <p className="text-sm text-slate-600">
                  Tổng số tags: {tags.length}
                </p>
              </motion.div>

              {/* Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-slate-200">
                  <CardContent className="p-0">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-200 text-sm font-medium text-slate-600">
                      <div className="col-span-3">Tên tag</div>
                      <div className="col-span-2">Màu sắc</div>
                      <div className="col-span-2">Ngày cập nhật</div>
                      <div className="col-span-2">Ẩn / Hiện</div>
                      <div className="col-span-3">Hoạt động</div>
                    </div>

                    {/* Table Content */}
                    {filteredTags.length === 0 ? (
                      <div className="p-16 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                            <TagIcon className="h-8 w-8 text-slate-400" />
                          </div>
                          <p className="text-slate-500 text-lg">
                            Không có tags nào
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="divide-y divide-slate-200">
                        {filteredTags.map((tag, index) => (
                          <motion.div
                            key={tag.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="grid grid-cols-12 gap-4 p-4 hover:bg-slate-50 transition-colors duration-150"
                          >
                            <div className="col-span-3">
                              <Badge
                                variant="secondary"
                                className="text-slate-700 bg-slate-100"
                                style={{
                                  backgroundColor: `${tag.color}20`,
                                  color: tag.color,
                                  borderColor: `${tag.color}40`,
                                }}
                              >
                                {tag.name}
                              </Badge>
                            </div>
                            <div className="col-span-2">
                              <div className="flex items-center space-x-2">
                                <div
                                  className="w-6 h-6 rounded-full border border-slate-200"
                                  style={{ backgroundColor: tag.color }}
                                />
                                <span className="text-slate-600 text-sm font-mono">
                                  {tag.color.toUpperCase()}
                                </span>
                              </div>
                            </div>
                            <div className="col-span-2">
                              <span className="text-slate-600">
                                {tag.lastUpdated}
                              </span>
                            </div>
                            <div className="col-span-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleVisibility(tag.id)}
                                className="p-2 h-auto"
                              >
                                {tag.isVisible ? (
                                  <Eye className="h-4 w-4 text-green-600" />
                                ) : (
                                  <EyeOff className="h-4 w-4 text-slate-400" />
                                )}
                              </Button>
                            </div>
                            <div className="col-span-3 flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleEdit(tag.id)}
                                className="p-2 h-auto text-slate-500 hover:text-slate-700"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDelete(tag.id)}
                                className="p-2 h-auto text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Add Tag Modal */}
            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-xl font-bold text-slate-900">
                      Thêm nhãn dán
                    </DialogTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsAddModalOpen(false)}
                      className="p-2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </DialogHeader>

                <div className="space-y-6 py-4">
                  {/* Tag Name Input */}
                  <div>
                    <Label className="text-slate-700 mb-2 block">
                      Tên nhãn <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Nhập tên nhãn"
                      value={tagName}
                      onChange={(e) => setTagName(e.target.value)}
                      className="border-purple-300 focus:border-purple-500"
                    />
                  </div>

                  {/* Color Picker */}
                  <div>
                    <Label className="text-slate-700 mb-2 block">
                      Màu sắc <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-10 h-10 rounded border border-slate-200 cursor-pointer"
                        style={{ backgroundColor: tagColor }}
                        onClick={() =>
                          document.getElementById("color-picker")?.click()
                        }
                      />
                      <Input
                        id="color-picker"
                        type="color"
                        value={tagColor}
                        onChange={(e) => setTagColor(e.target.value)}
                        className="hidden"
                      />
                      <Input
                        value={tagColor}
                        onChange={(e) => setTagColor(e.target.value)}
                        className="font-mono text-sm uppercase border-purple-300 focus:border-purple-500"
                        placeholder="#5C13C2"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end space-x-3 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setIsAddModalOpen(false)}
                    >
                      Thoát
                    </Button>
                    <Button
                      onClick={handleAddTag}
                      disabled={!tagName.trim()}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Thêm nhãn dán
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagManagement;
