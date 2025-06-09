import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ChatbotSettings from "./pages/ChatbotSettings";
import PlatformIntegrations from "./pages/PlatformIntegrations";
import QuickMessages from "./pages/QuickMessages";
import TagManagement from "./pages/TagManagement";
import MessagesManagement from "./pages/MessagesManagement";
import ChatInterface from "./pages/ChatInterface";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<Dashboard />} />
          <Route path="/dashboard/train" element={<Dashboard />} />
          <Route path="/dashboard/messages" element={<Dashboard />} />
          <Route path="/dashboard/analytics" element={<Dashboard />} />
          <Route path="/dashboard/transactions" element={<Dashboard />} />
          <Route path="/dashboard/affiliate" element={<Dashboard />} />
          <Route path="/dashboard/support" element={<Dashboard />} />
          <Route path="/dashboard/usage" element={<Dashboard />} />
          <Route path="/dashboard/settings" element={<Dashboard />} />
          <Route path="/chatbot/:id/settings" element={<ChatbotSettings />} />
          <Route
            path="/chatbot/:id/integrations"
            element={<PlatformIntegrations />}
          />
          <Route
            path="/chatbot/:id/quick-messages"
            element={<QuickMessages />}
          />
          <Route
            path="/chatbot/:id/tag-management"
            element={<TagManagement />}
          />
          <Route path="/chatbot/:id/chat" element={<ChatInterface />} />
          <Route path="/pricing" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
