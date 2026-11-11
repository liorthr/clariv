import { useEffect } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Button from "./Button.jsx";

export default function SocialProofScreen({ onContinue }) {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col h-[calc(100vh-100px)] px-5 overflow-hidden"
    >
      <div className="flex-1 flex flex-col">
        <div className="rounded-2xl overflow-hidden mb-6">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
            alt="Personne heureuse avec son téléphone"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-3xl font-bold text-indigo-600">13 453+</p>
                <p className="text-sm text-gray-600">personnes comme vous</p>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Parfait !</h2>
          <p className="text-gray-600 text-center leading-relaxed">
            Plus de <span className="font-semibold text-indigo-600">13 453 personnes</span> ont le même profil que
            vous et parviennent à atteindre leurs objectifs grâce à notre méthode.
          </p>
        </div>
      </div>
      <div className="py-6">
        <Button
          onClick={onContinue}
          className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-2xl shadow-lg shadow-indigo-200"
        >
          Continuer
        </Button>
      </div>
    </motion.div>
  );
}
