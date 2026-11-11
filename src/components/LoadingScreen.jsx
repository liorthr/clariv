import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let done = false;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          if (!done) {
            done = true;
            setTimeout(onComplete, 500);
          }
          return 100;
        }
        return p + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-[calc(100vh-80px)] px-5 py-8 overflow-hidden"
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-40 h-40 mb-6">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="80" cy="80" r="45" stroke="#E5E7EB" strokeWidth="8" fill="none" />
            <motion.circle
              cx="80"
              cy="80"
              r="45"
              stroke="#6366F1"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 0.1 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-indigo-600">{progress}%</span>
          </div>
        </div>
        <p className="text-gray-600 text-center mb-12">Création de votre challenge personnalisé...</p>
        <div className="text-center mb-8">
          <p className="text-4xl font-bold text-indigo-600 mb-2">100 000+</p>
          <p className="text-gray-600">personnes ont choisi notre méthode</p>
        </div>
        <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-lg p-5">
          <div className="flex gap-1 mb-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
            ))}
          </div>
          <p className="font-semibold text-gray-800 mb-2">Plateforme exceptionnelle</p>
          <p className="text-sm text-gray-600 mb-3">
            "Cette formation m'a permis de comprendre l'IA facilement et de commencer à générer mes premiers revenus
            en quelques semaines."
          </p>
          <p className="text-sm text-gray-500 text-right">- Marie, 52 ans</p>
        </div>
      </div>
    </motion.div>
  );
}
