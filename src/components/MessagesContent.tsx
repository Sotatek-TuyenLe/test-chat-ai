import { motion } from "framer-motion";

const MessagesContent = () => {
  return (
    <div className="flex-1 bg-slate-800 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-white mb-4">Quản lý tin nhắn</h1>
        <p className="text-slate-400 text-lg">
          Trang này đang được phát triển. Vui lòng quay lại sau.
        </p>
      </motion.div>
    </div>
  );
};

export default MessagesContent;
