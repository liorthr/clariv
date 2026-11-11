import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function QuizHeader({ step, totalSteps, onBack, showProgress = true }) {
  const progress = (step / totalSteps) * 100;
  return (
    <div className="sticky top-0 bg-white z-10 px-4 pt-4 pb-2">
      <div className="flex items-center justify-between mb-3">
        {step > 1 ? (
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
        ) : (
          <div className="w-9" />
        )}
        <h1 className="text-2xl font-script text-indigo-600" style={{ fontFamily: "cursive" }}>
          Clariv
        </h1>
        {showProgress ? (
          <span className="text-sm text-gray-500">
            {step} / {totalSteps}
          </span>
        ) : (
          <div className="w-12" />
        )}
      </div>
      {showProgress && (
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-indigo-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </div>
  );
}
