import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { X, Upload } from "lucide-react";

interface CreateChatbotModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const avatarOptions = [
  { id: 1, src: "/api/placeholder/60/60", alt: "Business man" },
  { id: 2, src: "/api/placeholder/60/60", alt: "Business woman" },
  { id: 3, src: "/api/placeholder/60/60", alt: "Avatar 3" },
];

const CreateChatbotModal = ({
  open,
  onOpenChange,
}: CreateChatbotModalProps) => {
  const [botName, setBotName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
  const [greeting, setGreeting] = useState(
    "👋 Hello! How can I help you today?",
  );
  const [industry, setIndustry] = useState("");

  const handleCreate = () => {
    console.log("Creating chatbot:", {
      name: botName,
      avatar: selectedAvatar,
      greeting,
      industry,
    });
    onOpenChange(false);
  };

  const handleCancel = () => {
    setBotName("");
    setSelectedAvatar(null);
    setGreeting("👋 Hello! How can I help you today?");
    setIndustry("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] p-0 overflow-hidden">
        <div className="flex h-full">
          {/* Left Side - Form */}
          <div className="flex-1 p-6">
            <DialogHeader className="mb-6">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl font-bold text-slate-900">
                  Tạo chatbot
                </DialogTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onOpenChange(false)}
                  className="p-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              {/* Bot Details Section */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Chi tiết bot
                </h3>

                {/* Bot Name */}
                <div className="space-y-2 mb-4">
                  <Label
                    htmlFor="bot-name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Tên
                  </Label>
                  <div className="relative">
                    <Input
                      id="bot-name"
                      placeholder="Chọn tên bot"
                      value={botName}
                      onChange={(e) => setBotName(e.target.value)}
                      className="pr-16"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">
                      {botName.length}/50
                    </span>
                  </div>
                </div>

                {/* Avatar Selection */}
                <div className="space-y-2 mb-4">
                  <Label className="text-sm font-medium text-slate-700">
                    Avatar
                  </Label>
                  <div className="flex space-x-3">
                    {/* Upload Option */}
                    <button className="w-15 h-15 border-2 border-dashed border-slate-300 rounded-full flex items-center justify-center hover:border-slate-400 transition-colors">
                      <Upload className="h-6 w-6 text-slate-400" />
                    </button>

                    {/* Predefined Avatars */}
                    {avatarOptions.map((avatar) => (
                      <button
                        key={avatar.id}
                        onClick={() => setSelectedAvatar(avatar.id)}
                        className={`w-15 h-15 rounded-full overflow-hidden border-2 transition-all duration-200 ${
                          selectedAvatar === avatar.id
                            ? "border-purple-500 ring-2 ring-purple-200"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <Avatar className="w-full h-full">
                          <AvatarFallback className="bg-slate-200">
                            U{avatar.id}
                          </AvatarFallback>
                        </Avatar>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Greeting Message */}
              <div>
                <Label
                  htmlFor="greeting"
                  className="text-sm font-medium text-slate-700 mb-2 block"
                >
                  Câu chào hỏi
                </Label>
                <div className="relative">
                  <Input
                    id="greeting"
                    value={greeting}
                    onChange={(e) => setGreeting(e.target.value)}
                    className="pr-16"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">
                    {greeting.length}/200
                  </span>
                </div>
              </div>

              {/* Industry Selection */}
              <div>
                <Label className="text-sm font-medium text-slate-700 mb-2 block">
                  Danh sách ngành nghề
                </Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Lựa chọn ngành nghề" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ecommerce">
                      Thương mại điện tử
                    </SelectItem>
                    <SelectItem value="service">Dịch vụ khách hàng</SelectItem>
                    <SelectItem value="restaurant">Nhà hàng & F&B</SelectItem>
                    <SelectItem value="education">Giáo dục</SelectItem>
                    <SelectItem value="realestate">Bất động sản</SelectItem>
                    <SelectItem value="events">Sự kiện</SelectItem>
                    <SelectItem value="other">Khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 mt-8">
              <Button variant="outline" onClick={handleCancel}>
                Thoát
              </Button>
              <Button
                onClick={handleCreate}
                disabled={!botName.trim() || !industry}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Tạo chatbot
              </Button>
            </div>
          </div>

          {/* Right Side - Template Info */}
          <div className="w-80 bg-slate-50 p-6 border-l border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Kịch bản mẫu
            </h3>

            <div className="bg-purple-100 rounded-lg p-4 mb-4">
              <p className="text-sm text-purple-800 leading-relaxed">
                Preny cung cấp kịch bản mẫu tối ưu cho từng ngành nghề, giúp bạn
                dễ dàng chốt sales với các câu hỏi phổ biến nhất. Bạn có thể sử
                dụng ngay bằng việc tích chọn kịch bản sẵn, tùy chỉnh hoặc tự
                tạo kịch bản riêng tại mục "kịch bản chốt sales". Cảm ơn bạn!
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs text-slate-500 uppercase tracking-wider">
                TỪ KHÓA PHỔ BIẾN
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white rounded text-xs text-slate-600 border">
                  Tư vấn
                </span>
                <span className="px-2 py-1 bg-white rounded text-xs text-slate-600 border">
                  Hỗ trợ
                </span>
                <span className="px-2 py-1 bg-white rounded text-xs text-slate-600 border">
                  Giá cả
                </span>
                <span className="px-2 py-1 bg-white rounded text-xs text-slate-600 border">
                  Thanh toán
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateChatbotModal;
