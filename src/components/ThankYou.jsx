import { motion } from "framer-motion";
import { CircleCheckBig, Clock, Mail } from "lucide-react";

// Contenu commun à l'étape finale du quiz et à la page /merci
export function ThankYouContent() {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto"
      >
        <CircleCheckBig className="w-12 h-12 text-green-600" />
      </motion.div>
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">Merci pour votre inscription !</h1>
      <p className="text-lg text-gray-600 text-center mb-8">Votre paiement a été confirmé avec succès.</p>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 mb-6 w-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Accès à la formation</h3>
            <p className="text-sm text-gray-600">
              Vous recevrez vos identifiants d'accès sous{" "}
              <span className="font-bold text-indigo-600">2 heures maximum</span> pour commencer votre formation.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Vérifiez votre email</h3>
            <p className="text-sm text-gray-600">Un email de confirmation avec tous les détails vous a été envoyé.</p>
          </div>
        </div>
      </div>
      <div className="bg-indigo-50 rounded-2xl p-6 w-full">
        <p className="text-center text-sm text-indigo-900 font-medium">🎉 Bienvenue dans le Challenge IA 28 jours !</p>
        <p className="text-center text-xs text-indigo-700 mt-2">Préparez-vous à transformer vos compétences en IA</p>
      </div>
    </>
  );
}

export default function ThankYouScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-5 py-8 bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="max-w-md w-full flex flex-col items-center">
        <ThankYouContent />
      </div>
    </motion.div>
  );
}
