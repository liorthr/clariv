import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const COLORED = [
  "bg-green-50 hover:bg-green-100 border-green-200 hover:border-green-300",
  "bg-orange-50 hover:bg-orange-100 border-orange-200 hover:border-orange-300",
  "bg-blue-50 hover:bg-blue-100 border-blue-200 hover:border-blue-300",
];
const DEFAULT = "bg-gray-50 hover:bg-indigo-50 border-transparent hover:border-indigo-200";

export default function QuestionScreen({ question, subtitle, options, onSelect, useColoredOptions = false }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-[calc(100vh-80px)] px-5 py-3 overflow-hidden"
    >
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-1">{question}</h2>
        {subtitle && <p className="text-gray-500 text-xs">{subtitle}</p>}
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-2.5">
          {options.map((opt, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(opt.value)}
              className={`w-full border-2 rounded-2xl p-3 text-left transition-all duration-200 group ${
                (useColoredOptions && COLORED[i]) || DEFAULT
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800 text-sm">{opt.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 transition-colors" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
