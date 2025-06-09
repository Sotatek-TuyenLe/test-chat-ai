import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Crown, Zap, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock pricing data - replace with API later
const pricingData = {
  basic: {
    1: { price: 399000, discount: 0 },
    3: { price: 359000, discount: 10 },
    6: { price: 339000, discount: 15 },
    12: { price: 319000, discount: 20 },
  },
  advanced: {
    1: { price: 799000, discount: 0 },
    3: { price: 719000, discount: 10 },
    6: { price: 679000, discount: 15 },
    12: { price: 639000, discount: 20 },
  },
  premium: {
    1: { price: 1599000, discount: 0 },
    3: { price: 1439000, discount: 10 },
    6: { price: 1359000, discount: 15 },
    12: { price: 1279000, discount: 20 },
  },
};

const packages = [
  {
    id: "basic",
    name: "Gói Cơ Bản",
    icon: Zap,
    iconColor: "text-green-400",
    popular: false,
    features: {
      credits: "1.000.000",
      websites: "5",
      fanpages: "5",
      documents: "10",
      chatbots: "5",
      storage: "1024MB",
      integrations: ["Website", "Facebook", "Shopify", "WooCommerce"],
      dataTraining: true,
      dataExtraction: false,
      supportConsultation: false,
      performanceReports: false,
    },
  },
  {
    id: "advanced",
    name: "Gói Nâng Cao",
    icon: Rocket,
    iconColor: "text-purple-400",
    popular: true,
    features: {
      credits: "2.000.000",
      websites: "20",
      fanpages: "20",
      documents: "25",
      chatbots: "12",
      storage: "5120MB",
      integrations: ["Website", "Facebook", "Shopify", "WooCommerce"],
      dataTraining: true,
      dataExtraction: true,
      supportConsultation: true,
      performanceReports: false,
    },
  },
  {
    id: "premium",
    name: "Gói Cao Cấp",
    icon: Crown,
    iconColor: "text-yellow-400",
    popular: false,
    features: {
      credits: "5.000.000",
      websites: "Không giới hạn",
      fanpages: "Không giới hạn",
      documents: "Không giới hạn",
      chatbots: "Không giới hạn",
      storage: "10240MB",
      integrations: ["Website", "Facebook", "Shopify", "WooCommerce"],
      dataTraining: true,
      dataExtraction: true,
      supportConsultation: true,
      performanceReports: true,
    },
  },
];

const billingCycles = [
  { months: 1, label: "1 tháng" },
  { months: 3, label: "3 tháng" },
  { months: 6, label: "6 tháng" },
  { months: 12, label: "12 tháng" },
];

const PricingContent = () => {
  const [selectedCycle, setSelectedCycle] = useState(6);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  const handleUpgrade = (packageId: string) => {
    console.log(`Upgrading to ${packageId} for ${selectedCycle} months`);
    // Handle upgrade logic here
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Subscription Period */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-sm text-slate-400">Ngày bắt đầu</p>
          <p className="text-blue-400 font-medium">08:31 09/06/2025</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-400">Ngày kết thúc</p>
          <p className="text-blue-400 font-medium">08:31 16/06/2025</p>
          <p className="text-xs text-slate-500">
            Còn lại: 6 ngày 17 giờ 43 phút 9 giây
          </p>
        </div>
      </div>

      {/* Billing Cycle Selector */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-white">
          Chọn chu kỳ thanh toán
        </h2>
        <div className="flex flex-wrap gap-3">
          {billingCycles.map((cycle) => (
            <button
              key={cycle.months}
              onClick={() => setSelectedCycle(cycle.months)}
              className={cn(
                "px-4 py-2 rounded-lg font-medium transition-all duration-200",
                {
                  "bg-purple-600 text-white": selectedCycle === cycle.months,
                  "bg-slate-800 text-slate-300 hover:bg-slate-700":
                    selectedCycle !== cycle.months,
                },
              )}
            >
              {cycle.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => {
          const IconComponent = pkg.icon;
          const pricing =
            pricingData[pkg.id as keyof typeof pricingData][
              selectedCycle as keyof typeof pricingData.basic
            ];

          return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-purple-600 text-white px-4 py-1">
                    ⭐ Được đề xuất
                  </Badge>
                </div>
              )}

              <Card
                className={cn(
                  "h-full bg-slate-800 border-slate-700 transition-all duration-200 hover:border-slate-600",
                  {
                    "border-purple-500 bg-gradient-to-b from-purple-900/20 to-slate-800":
                      pkg.popular,
                  },
                )}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <IconComponent className={cn("h-6 w-6", pkg.iconColor)} />
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-white">
                      {formatPrice(pricing.price)} VNĐ/tháng
                    </div>
                    {pricing.discount > 0 && (
                      <div className="text-sm text-green-400 font-medium">
                        Tiết kiệm {pricing.discount}% khi đăng ký{" "}
                        {selectedCycle} tháng
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Số lượng Credit</span>
                      <span className="text-white font-medium">
                        {pkg.features.credits}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-400">
                        Số website tích hợp
                      </span>
                      <span className="text-white font-medium">
                        {pkg.features.websites}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-400">
                        Số Fanpage tích hợp
                      </span>
                      <span className="text-white font-medium">
                        {pkg.features.fanpages}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-400">Tài liệu đào tạo</span>
                      <span className="text-white font-medium">
                        {pkg.features.documents}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-400">Số lượng Chatbot</span>
                      <span className="text-white font-medium">
                        {pkg.features.chatbots}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-400">
                        Số lượng tài liệu lưu trữ
                      </span>
                      <span className="text-white font-medium">
                        {pkg.features.storage}
                      </span>
                    </div>
                  </div>

                  {/* Integration Features */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-slate-300">
                        Tích hợp {pkg.features.integrations.join(", ")}
                      </span>
                    </div>

                    {pkg.features.dataTraining && (
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-slate-300">
                          Hỗ trợ tải lên đào tạo chatbot
                        </span>
                      </div>
                    )}

                    {pkg.features.dataExtraction && (
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-slate-300">
                          Trích xuất dữ liệu trò chuyện
                        </span>
                      </div>
                    )}

                    {pkg.features.supportConsultation && (
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-slate-300">
                          Hỗ trợ tư vấn đào tạo kịch bản chatbot
                        </span>
                      </div>
                    )}

                    {pkg.features.performanceReports && (
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-slate-300">
                          Thống kê hiệu quả trò chuyện
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Upgrade Button */}
                  <Button
                    onClick={() => handleUpgrade(pkg.id)}
                    className={cn("w-full mt-6 font-medium", {
                      "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white":
                        pkg.popular,
                      "bg-slate-700 hover:bg-slate-600 text-white":
                        !pkg.popular,
                    })}
                  >
                    Nâng cấp ngay
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingContent;
