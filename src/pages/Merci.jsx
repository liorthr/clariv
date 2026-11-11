import { motion } from "framer-motion";
import { ThankYouContent } from "../components/ThankYou.jsx";

// Page de retour après paiement Stripe (/merci)
export default function Merci() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center px-5 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full flex flex-col items-center"
      >
        <ThankYouContent />
      </motion.div>
    </div>
  );
}
