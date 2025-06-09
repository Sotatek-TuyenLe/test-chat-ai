import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white"
      >
        <h1 className="text-3xl font-bold mb-6">Thông tin cá nhân</h1>
        <p className="text-slate-400 mb-8">
          Quản lý thông tin cá nhân và cài đặt tài khoản của bạn.
        </p>

        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Thông tin tài khoản</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Họ và tên
              </label>
              <div className="bg-slate-700 rounded-md p-3 text-white">
                Huỳnh Mạc Tử Khoa
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <div className="bg-slate-700 rounded-md p-3 text-white">
                tukhoahuynh@example.com
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Gói dịch vụ
              </label>
              <div className="bg-slate-700 rounded-md p-3 text-white">
                Gói dùng thử
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
