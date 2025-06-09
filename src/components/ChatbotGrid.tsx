import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings, Trash2 } from "lucide-react";

const mockChatbots = [
  {
    id: 1,
    name: "dev",
    avatar: "/api/placeholder/50/50",
    createdAt: "09/06/2025 - 11:25 AM",
    updatedAt: "Ngày cập nhật",
  },
  {
    id: 2,
    name: "333333333",
    avatar: "/api/placeholder/50/50",
    createdAt: "09/06/2025 - 05:58 PM",
    updatedAt: "Ngày cập nhật",
  },
  {
    id: 3,
    name: "SDQWE",
    avatar: "/api/placeholder/50/50",
    createdAt: "06/06/2025 - 07:56 PM",
    updatedAt: "Ngày cập nhật",
  },
  {
    id: 4,
    name: "test",
    avatar: "/api/placeholder/50/50",
    createdAt: "06/06/2025 - 02:25 PM",
    updatedAt: "Ngày cập nhật",
  },
  {
    id: 5,
    name: "vui vẻ",
    avatar: "/api/placeholder/50/50",
    createdAt: "06/06/2025 - 08:32 AM",
    updatedAt: "Ngày cập nhật",
  },
  {
    id: 6,
    name: "FB- bất động sản",
    avatar: "/api/placeholder/50/50",
    createdAt: "05/06/2025 - 10:11 PM",
    updatedAt: "Ngày cập nhật",
  },
];

const ChatbotGrid = () => {
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    navigate(`/chatbot/${id}/settings`);
  };

  const handleDelete = (id: number) => {
    console.log("Delete chatbot:", id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockChatbots.map((chatbot, index) => (
        <motion.div
          key={chatbot.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="bg-white border border-slate-200 hover:shadow-md transition-all duration-200">
            <CardContent className="p-6">
              {/* Header with Avatar and Name */}
              <div className="flex items-center space-x-3 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={chatbot.avatar} alt={chatbot.name} />
                  <AvatarFallback className="bg-slate-200 text-slate-600">
                    {chatbot.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 truncate">
                    {chatbot.name}
                  </h3>
                </div>
              </div>

              {/* Date Info */}
              <div className="space-y-2 mb-4">
                <div>
                  <p className="text-xs text-slate-500">{chatbot.updatedAt}</p>
                  <p className="text-sm text-slate-700">{chatbot.createdAt}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-2">
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
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ChatbotGrid;
