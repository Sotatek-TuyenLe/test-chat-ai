import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
  MessageSquare,
  Phone,
  Globe,
  Camera,
  ShoppingBag,
  ChevronDown,
  X,
  MoreHorizontal,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";

interface ChatChannel {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface Conversation {
  id: string;
  customerName: string;
  customerPhone: string;
  lastMessage: string;
  timestamp: string;
  channel: string;
  status: "unread" | "read" | "replied";
  avatar: string;
  isOnline: boolean;
}

const MessagesManagement = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState("all");
  const [showChannelDropdown, setShowChannelDropdown] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter states
  const [filterChannel, setFilterChannel] = useState("");
  const [filterBot, setFilterBot] = useState("");
  const [filterLabel, setFilterLabel] = useState("");
  const [filterConversationStatus, setFilterConversationStatus] = useState("");
  const [filterReplyStatus, setFilterReplyStatus] = useState("");
  const [filterTimeRange, setFilterTimeRange] = useState("");

  const chatChannels: ChatChannel[] = [
    {
      id: "all",
      name: "Tất cả kênh chat",
      icon: <MessageSquare className="h-4 w-4" />,
      color: "text-purple-600",
    },
    {
      id: "messenger",
      name: "Messenger",
      icon: <MessageSquare className="h-4 w-4" />,
      color: "text-blue-600",
    },
    {
      id: "zalo",
      name: "Zalo",
      icon: <MessageSquare className="h-4 w-4" />,
      color: "text-blue-500",
    },
    {
      id: "website",
      name: "Website",
      icon: <Globe className="h-4 w-4" />,
      color: "text-green-600",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: <Camera className="h-4 w-4" />,
      color: "text-pink-600",
    },
    {
      id: "lazada",
      name: "Lazada",
      icon: <ShoppingBag className="h-4 w-4" />,
      color: "text-orange-600",
    },
  ];

  const conversations: Conversation[] = [
    {
      id: "1",
      customerName: "Huỳnh Khoa",
      customerPhone: "Chào Anh/Chị. Anh/Chị cần...",
      lastMessage: "Chào Anh/Chị. Anh/Chị cần...",
      timestamp: "CN",
      channel: "messenger",
      status: "unread",
      avatar: "H",
      isOnline: true,
    },
    {
      id: "2",
      customerName: "343432 - 0905687834",
      customerPhone: "a",
      lastMessage: "a",
      timestamp: "CN",
      channel: "zalo",
      status: "read",
      avatar: "3",
      isOnline: false,
    },
    {
      id: "3",
      customerName: "tài 3 - 0125487965",
      customerPhone: "Câu hỏi chưa được soạn...",
      lastMessage: "Câu hỏi chưa được soạn...",
      timestamp: "CN",
      channel: "website",
      status: "replied",
      avatar: "T",
      isOnline: false,
    },
    {
      id: "4",
      customerName: "Lai Ia Tài - 0325678465",
      customerPhone: "Tìm nhấn hình ảnh/video",
      lastMessage: "Tìm nhấn hình ảnh/video",
      timestamp: "06/06",
      channel: "instagram",
      status: "unread",
      avatar: "L",
      isOnline: true,
    },
    {
      id: "5",
      customerName: "Tài Lương - 0359500725",
      customerPhone: "MM",
      lastMessage: "MM",
      timestamp: "06/06",
      channel: "lazada",
      status: "read",
      avatar: "T",
      isOnline: false,
    },
    {
      id: "6",
      customerName: "TuanLe - 0905803866",
      customerPhone: "Bạn cần đặt món ăn ở c...",
      lastMessage: "Bạn cần đặt món ăn ở c...",
      timestamp: "07/06",
      channel: "messenger",
      status: "replied",
      avatar: "T",
      isOnline: true,
    },
  ];

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const selectedChannelData =
    chatChannels.find((ch) => ch.id === selectedChannel) || chatChannels[0];

  const getChannelIcon = (channelId: string) => {
    const channel = chatChannels.find((ch) => ch.id === channelId);
    return channel ? channel.icon : <MessageSquare className="h-3 w-3" />;
  };

  const getChannelColor = (channelId: string) => {
    const channel = chatChannels.find((ch) => ch.id === channelId);
    return channel ? channel.color : "text-gray-600";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "unread":
        return "text-red-500";
      case "read":
        return "text-yellow-500";
      case "replied":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const applyFilters = () => {
    // Apply filter logic here
    setIsFilterOpen(false);
  };

  const resetFilters = () => {
    setFilterChannel("");
    setFilterBot("");
    setFilterLabel("");
    setFilterConversationStatus("");
    setFilterReplyStatus("");
    setFilterTimeRange("");
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
      <div className="flex-1 overflow-hidden">
        <div className="flex h-full">
          {/* Left Panel - Conversations */}
          <div className="w-80 bg-white border-r border-slate-200 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold text-slate-900">Chat</h1>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFilterOpen(true)}
                  className="text-slate-600"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Lọc
                </Button>
              </div>

              {/* Channel Selector */}
              <div className="relative">
                <Button
                  variant="outline"
                  className="w-full justify-between text-left"
                  onClick={() => setShowChannelDropdown(!showChannelDropdown)}
                >
                  <div className="flex items-center space-x-2">
                    <span className={selectedChannelData.color}>
                      {selectedChannelData.icon}
                    </span>
                    <span>{selectedChannelData.name}</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>

                {showChannelDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-md shadow-lg z-50">
                    {chatChannels.map((channel) => (
                      <button
                        key={channel.id}
                        className="w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-slate-50 transition-colors"
                        onClick={() => {
                          setSelectedChannel(channel.id);
                          setShowChannelDropdown(false);
                        }}
                      >
                        <span className={channel.color}>{channel.icon}</span>
                        <span>{channel.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-slate-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Tìm kiếm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Conversation Stats */}
            <div className="px-4 py-2 border-b border-slate-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Cuộc hội thoại</span>
                <span className="text-purple-600 font-medium">66 / 2.000</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: "3.3%" }}
                ></div>
              </div>
              <div className="text-xs text-orange-500 mt-1">
                Ngày reset data gói: 11/06/2025
              </div>
            </div>

            {/* Near Label */}
            <div className="p-3 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-600">Gần nhất</span>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Filter className="h-3 w-3" />
                </Button>
                <span className="text-sm text-slate-600">Lọc</span>
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className="p-3 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                        {conversation.avatar}
                      </div>
                      {conversation.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                      <div
                        className={`absolute -top-1 -left-1 ${getChannelColor(conversation.channel)}`}
                      >
                        {getChannelIcon(conversation.channel)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-slate-900 truncate">
                          {conversation.customerName}
                        </h3>
                        <div className="flex items-center space-x-1">
                          <span className="text-xs text-slate-500">
                            {conversation.timestamp}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-5 w-5 p-0"
                          >
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 truncate mt-1">
                        {conversation.lastMessage}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        {conversation.status === "unread" && (
                          <Badge variant="destructive" className="text-xs">
                            Chưa đọc
                          </Badge>
                        )}
                        {conversation.id === "3" && (
                          <>
                            <span className="text-xs text-slate-500">
                              Bỏ xem
                            </span>
                            <span className="text-xs text-red-500">
                              Xóa cuộc hội thoại
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Welcome Screen */}
          <div className="flex-1 bg-slate-50 flex items-center justify-center">
            <div className="text-center max-w-md">
              {/* Illustration */}
              <div className="mb-8">
                <div className="relative mx-auto w-64 h-64">
                  {/* AI Support Illustration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-2xl shadow-lg">
                    <div className="absolute top-4 right-4 bg-purple-700 rounded-lg p-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-12 left-8 bg-orange-400 rounded-2xl p-3 shadow-lg transform -rotate-12">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>

                    <div className="absolute top-16 left-12 bg-yellow-400 rounded-xl p-2 shadow-lg">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-yellow-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-yellow-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-yellow-600 rounded-full"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-8 bg-purple-300 rounded-xl p-2">
                      <MessageSquare className="h-6 w-6 text-purple-700" />
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Đội ngũ hỗ trợ
              </h2>
              <p className="text-slate-600 mb-8">
                Đội ngũ hỗ trợ phản hồi nhanh chóng, luôn sẵn sàng khi bạn cần,
                giải quyết vấn đề tức thì để bạn yên tâm kinh doanh.
              </p>

              {/* Pagination dots */}
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
              </div>

              {/* Navigation arrows */}
              <div className="flex justify-between items-center mt-8 px-8">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-bold text-slate-900">
                Bộ lọc
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-6 py-4">
            {/* Channel Filter */}
            <div>
              <Label className="text-slate-700 mb-2 block">Kênh</Label>
              <Select value={filterChannel} onValueChange={setFilterChannel}>
                <SelectTrigger>
                  <SelectValue placeholder="Lọc kênh" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="messenger">Messenger</SelectItem>
                  <SelectItem value="zalo">Zalo</SelectItem>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="lazada">Lazada</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Bot Filter */}
            <div>
              <Label className="text-slate-700 mb-2 block">Bot</Label>
              <Select value={filterBot} onValueChange={setFilterBot}>
                <SelectTrigger>
                  <SelectValue placeholder="Lọc bot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bot1">Bot 1</SelectItem>
                  <SelectItem value="bot2">Bot 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Label Filter */}
            <div>
              <Label className="text-slate-700 mb-2 block">Nhãn dán</Label>
              <Select value={filterLabel} onValueChange={setFilterLabel}>
                <SelectTrigger>
                  <SelectValue placeholder="Lọc nhãn dán" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="label1">Nhãn 1</SelectItem>
                  <SelectItem value="label2">Nhãn 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Conversation Status Filter */}
            <div>
              <Label className="text-slate-700 mb-2 block">
                Trạng thái hội thoại
              </Label>
              <Select
                value={filterConversationStatus}
                onValueChange={setFilterConversationStatus}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Lọc trạng thái hội thoại" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Đang hoạt động</SelectItem>
                  <SelectItem value="inactive">Không hoạt động</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Reply Status Filter */}
            <div>
              <Label className="text-slate-700 mb-2 block">
                Trạng thái trả lời
              </Label>
              <Select
                value={filterReplyStatus}
                onValueChange={setFilterReplyStatus}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Lọc trạng thái trả lời" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="replied">Đã trả lời</SelectItem>
                  <SelectItem value="pending">Chờ trả lời</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Time Range Filter */}
            <div>
              <Label className="text-slate-700 mb-2 block">Thời gian</Label>
              <Select
                value={filterTimeRange}
                onValueChange={setFilterTimeRange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn thời gian" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Hôm nay</SelectItem>
                  <SelectItem value="yesterday">Hôm qua</SelectItem>
                  <SelectItem value="week">Tuần này</SelectItem>
                  <SelectItem value="month">Tháng này</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="outline" onClick={resetFilters}>
              Thoát
            </Button>
            <Button
              onClick={applyFilters}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Áp dụng
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MessagesManagement;
