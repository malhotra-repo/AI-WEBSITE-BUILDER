import React from "react";
import { AnimatePresence, motion } from "motion/react";

function LoginModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80  backdrop-blur-xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.45, ease: " easeOut" }}

className=" relative w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent"

          >

<div className="realtive rounded-3xl bg-[#0b0b0b] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.8)] overflow-hidden"></div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoginModal;
