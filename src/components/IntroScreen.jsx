import { motion } from "framer-motion";
import { Menu, CircleCheckBig, Star, ChevronRight } from "lucide-react";

export default function IntroScreen({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-screen bg-white overflow-hidden"
    >
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <h1 className="text-3xl font-script text-indigo-600" style={{ fontFamily: "cursive" }}>
          Clariv
        </h1>
        <Menu className="w-7 h-7 text-gray-800" />
      </div>

      <div className="px-5 pb-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <CircleCheckBig className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-semibold text-gray-600">CHOIX DE 700K+ UTILISATEURS</span>
            </div>
            <p className="text-sm font-bold text-gray-900">Nouvelles compétences acquises</p>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-4 h-4 fill-green-500 text-green-500" />
              <span className="text-xs font-semibold text-gray-600">NOTÉ SUR TRUSTPILOT</span>
            </div>
            <p className="text-sm font-bold text-gray-900">4.5 Score de satisfaction</p>
          </div>
        </div>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-5 gap-4 opacity-20">
            {[1, 2, 4, 5, 6, 8, 10].map((day, i) => (
              <div key={i} className="text-center">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    i % 3 === 0 ? "bg-green-200" : i % 3 === 1 ? "bg-orange-200" : "bg-blue-200"
                  }`}
                >
                  <span className="text-xs font-bold">📱</span>
                </div>
                <p className="text-xs font-bold mt-1 text-gray-800">JOUR {day}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
          alt="Formateur"
          className="w-48 h-64 object-cover object-top rounded-2xl relative z-10"
        />
      </div>

      <div className="px-5 pb-5">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">CHALLENGE IA 28 JOURS</h2>
        <p className="text-gray-500 text-center text-lg mb-6 font-medium">AVEZ-VOUS DÉJÀ UTILISÉ L'IA ?</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            ["OUI", "oui"],
            ["NON", "non"],
          ].map(([label, value]) => (
            <motion.button
              key={value}
              whileTap={{ scale: 0.98 }}
              onClick={() => onStart(value)}
              className="bg-indigo-600 text-white rounded-2xl py-4 font-bold text-lg flex items-center justify-center gap-2 shadow-lg"
            >
              {label} <ChevronRight className="w-5 h-5" />
            </motion.button>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center leading-relaxed mb-1">
          En continuant, vous acceptez les{" "}
          <a href="#" className="underline">Conditions générales</a>,{" "}
          <a href="#" className="underline">Politique de confidentialité</a>,{" "}
          <a href="#" className="underline">Conditions d'abonnement</a>
        </p>
        <p className="text-xs text-gray-400 text-center">Edulagoon Digital Corp, Las Vegas, Nevada</p>
      </div>
    </motion.div>
  );
}
