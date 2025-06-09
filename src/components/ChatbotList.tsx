import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings, Trash2 } from "lucide-react";

const mockChatbots = [
  {
    id: 1,
    name: "dev",
    avatar: "/api/placeholder/50/50",
    createdAt: "09/06/2025 - 11:25 AM",
  },
  {
    id: 2,
    name: "333333333",
    avatar: "/api/placeholder/50/50",
    createdAt: "09/06/2025 - 05:58 PM",
  },
  {
    id: 3,
    name: "SDQWE",
    avatar: "/api/placeholder/50/50",
    createdAt: "06/06/2025 - 07:56 PM",
  },
  {
    id: 4,
    name: "test",
    avatar: "/api/placeholder/50/50",
    createdAt: "06/06/2025 - 02:25 PM",
  },
  {
    id: 5,
    name: "vui vẻ",
    avatar: "/api/placeholder/50/50",
    createdAt: "06/06/2025 - 08:32 AM",
  },
  {
    id: 6,
    name: "FB- bất động sản",
    avatar: "/api/placeholder/50/50",
    createdAt: "05/06/2025 - 10:11 PM",
  },
];

const ChatbotList = () => {
  const handleEdit = (id: number) => {
    console.log("Edit chatbot:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete chatbot:", id);
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200">
      {/* Header */}
      <div className="grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-200 text-sm font-medium text-slate-600">
        <div className="col-span-5">Tên</div>
        <div className="col-span-4">Ngày cập nhật</div>
        <div className="col-span-3 text-right">Hoạt động</div>
      </div>

      {/* List Items */}
      <div className="divide-y divide-slate-200">
        {mockChatbots.map((chatbot, index) => (
          <motion.div
            key={chatbot.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="grid grid-cols-12 gap-4 p-4 hover:bg-slate-50 transition-colors duration-150"
          >
            {/* Name with Avatar */}
            <div className="col-span-5 flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={chatbot.avatar} alt={chatbot.name} />
                <AvatarFallback className="bg-slate-200 text-slate-600">
                  {chatbot.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-slate-900">{chatbot.name}</span>
            </div>

            {/* Created Date */}
            <div className="col-span-4 flex items-center">
              <span className="text-slate-600">{chatbot.createdAt}</span>
            </div>

            {/* Actions */}
            <div className="col-span-3 flex items-center justify-end space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleEdit(chatbot.id)}
                className="p-2 h-auto text-slate-500 hover:text-slate-700 hover:bg-slate-100"
              >
                <Settings className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDelete(chatbot.id)}
                className="p-2 h-auto text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChatbotList;
