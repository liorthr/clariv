import { motion } from "framer-motion";
import { ThumbsUp, Zap, Star, Target, Brain } from "lucide-react";
import Button from "./Button.jsx";

export default function ProfileScreen({ answers, onContinue }) {
  const motivation =
    answers.income_goal === "+100000" ? "Très élevée" : answers.income_goal === "50000-100000" ? "Élevée" : "Modérée";
  const knowledge =
    answers.ai_level === "expert" ? "Avancé" : answers.ai_level === "intermediaire" ? "Intermédiaire" : "Débutant";

  const stats = [
    { icon: Zap, bg: "bg-indigo-100", color: "text-indigo-600", label: "Motivation", value: motivation },
    { icon: Star, bg: "bg-yellow-100", color: "text-yellow-600", label: "Potentiel", value: "Élevé" },
    { icon: Target, bg: "bg-blue-100", color: "text-blue-600", label: "Focus", value: "À développer" },
    { icon: Brain, bg: "bg-purple-100", color: "text-purple-600", label: "Connaissances IA", value: knowledge },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col h-[calc(100vh-80px)] px-5 py-3 overflow-hidden"
    >
      <h2 className="text-xl font-bold text-gray-900 text-center mb-3">Votre Profil de Croissance IA</h2>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-3 mb-3 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-800 text-sm">Score de préparation</h3>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
            Résultat : Parfait
          </span>
        </div>
        <div className="relative mb-4">
          <div className="flex items-center justify-center mb-2">
            <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-medium">Modéré</span>
          </div>
          <div className="h-3 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full">
            <div className="relative">
              <motion.div
                initial={{ left: "0%" }}
                animate={{ left: "55%" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute -top-1 w-5 h-5 bg-white border-4 border-gray-300 rounded-full shadow"
                style={{ transform: "translateX(-50%)" }}
              />
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>FAIBLE</span>
            <span>INTERMÉDIAIRE</span>
            <span>ÉLEVÉ</span>
          </div>
        </div>
        <div className="bg-amber-50 rounded-xl p-3 mb-3">
          <div className="flex items-start gap-2">
            <ThumbsUp className="w-4 h-4 text-amber-600 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800 mb-0.5 text-sm">Score impressionnant pour réussir avec l'IA</p>
              <p className="text-xs text-gray-600">
                Une étude de 2024 révèle que les professionnels utilisant l'IA gagnent en moyenne 25% de plus que
                leurs pairs.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {stats.map(({ icon: Icon, bg, color, label, value }) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-8 h-8 ${bg} rounded-xl flex items-center justify-center`}>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <div>
                <p className="text-xs text-gray-500">{label}</p>
                <p className="font-bold text-gray-800 text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-2">
        <Button
          onClick={onContinue}
          className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold rounded-2xl shadow-lg shadow-indigo-200"
        >
          Continuer vers le challenge
        </Button>
      </div>
    </motion.div>
  );
}
