import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Headphones,
  Utensils,
  GraduationCap,
  Home,
  CalendarDays,
  Plus,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  { id: "ecommerce", icon: ShoppingCart, text: "Thương mại điện tử & Bán lẻ" },
  { id: "service", icon: Headphones, text: "Dịch vụ & Chăm sóc khách hàng" },
  { id: "restaurant", icon: Utensils, text: "Nhà hàng & F&B" },
  { id: "education", icon: GraduationCap, text: "Giáo dục & Đào tạo" },
  { id: "realestate", icon: Home, text: "Bất động sản" },
  { id: "events", icon: CalendarDays, text: "Sự kiện & Giải Trí" },
  { id: "other", icon: Plus, text: "Ngành hàng khác" },
];

const Index = () => {
  const [companyName, setCompanyName] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");

  const handleContinue = () => {
    console.log("Company:", companyName, "Industry:", selectedIndustry);
    // Navigate to login page
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                ChatbotViet
              </span>
            </div>
            <Button
              variant="outline"
              className="text-gray-600 hover:text-gray-800"
              onClick={() => (window.location.href = "/login")}
            >
              Tiếp tục
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Thông tin chung
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Giúp chúng tôi hiểu rõ hơn về nhu cầu của doanh nghiệp bạn
            </p>
          </div>

          {/* Progress Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                >
                  Thông tin cơ bản
                </Badge>
                <span className="text-sm text-green-600 font-medium">
                  Hoàn tất
                </span>
              </div>
              <span className="text-sm text-gray-500">50% hoàn thành</span>
            </div>
            <Progress value={50} className="h-2 bg-gray-200">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: "50%" }}
              ></div>
            </Progress>
          </div>

          {/* Main Form Card */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Cho chúng tôi biết về doanh nghiệp của bạn
              </h2>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Company Name Field */}
              <div className="space-y-3">
                <Label
                  htmlFor="company-name"
                  className="text-base font-medium text-gray-700"
                >
                  1. Tên doanh nghiệp
                </Label>
                <Input
                  id="company-name"
                  placeholder="Nhập tên doanh nghiệp của bạn"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="h-12 text-base border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              {/* Industry Selection */}
              <div className="space-y-4">
                <Label className="text-base font-medium text-gray-700">
                  2. Chọn ngành hàng
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {industries.map((industry) => {
                    const IconComponent = industry.icon;
                    const isSelected = selectedIndustry === industry.id;

                    return (
                      <button
                        key={industry.id}
                        type="button"
                        onClick={() => setSelectedIndustry(industry.id)}
                        className={cn(
                          "p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md",
                          "flex items-start space-x-3 min-h-[80px]",
                          {
                            "border-purple-500 bg-purple-50 shadow-md":
                              isSelected,
                            "border-gray-200 bg-white hover:border-gray-300":
                              !isSelected,
                          },
                        )}
                      >
                        <div
                          className={cn("flex-shrink-0 p-2 rounded-lg", {
                            "bg-gradient-to-r from-pink-500 to-purple-600 text-white":
                              isSelected,
                            "bg-gray-100 text-gray-600": !isSelected,
                          })}
                        >
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span
                          className={cn("text-sm font-medium leading-tight", {
                            "text-purple-900": isSelected,
                            "text-gray-700": !isSelected,
                          })}
                        >
                          {industry.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-8">
              <Button
                onClick={handleContinue}
                disabled={!companyName.trim() || !selectedIndustry}
                className="w-full h-12 text-base font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Tiếp tục
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>

          {/* Additional Information */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Thông tin của bạn sẽ được bảo mật và chỉ sử dụng để tạo chatbot
              phù hợp nhất
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
