import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Users } from "lucide-react";

const templates = [
  {
    id: 1,
    title: "Sách Số Thông Minh",
    description:
      "Tìm kiếm và khám phá sách một cách dễ dàng với BookWormBot. Nhận gợi ý sách theo sở thích, quản lý danh sách đọc, và cập nhật...",
    image: "/api/placeholder/400/200",
    views: 116,
    users: 31,
    category: "Tư vấn",
  },
  {
    id: 2,
    title: "Nội Thất Thông Minh Bot",
    description:
      "Khám phá DecorMateBot - trợ lý nội thất AI giúp bạn chọn sản phẩm phù hợp với không gian và phong cách. Tư vấn chi tiết...",
    image: "/api/placeholder/400/200",
    views: 251,
    users: 49,
    category: "CSKH",
  },
  {
    id: 3,
    title: "Chatbot AI bán lẻ đồ điện tử, công nghệ",
    description:
      "Khám phá Chatbot bán lẻ đồ điện tử, công nghệ - Trợ lý ảo chuyên nghiệp giúp bạn sở hữu sản phẩm, tư vấn thông...",
    image: "/api/placeholder/400/200",
    views: 236,
    users: 61,
    category: "hr",
  },
];

const ChatbotTemplates = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-2 text-purple-400">
        <div className="h-5 w-5 bg-purple-600/20 rounded flex items-center justify-center">
          <div className="h-2 w-2 bg-purple-400 rounded"></div>
        </div>
        <span className="text-sm font-medium">Được đề xuất bởi AI</span>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-200 cursor-pointer group overflow-hidden">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-40 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-white font-semibold text-lg leading-tight line-clamp-2">
                      {template.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {template.description}
                    </p>
                  </div>

                  {/* Stats and Category */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-4 text-slate-500 text-sm">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{template.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{template.users}</span>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-slate-700 text-slate-300 text-xs px-2 py-1"
                    >
                      {template.category}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChatbotTemplates;
