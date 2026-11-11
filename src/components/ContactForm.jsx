import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Lock } from "lucide-react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function ContactForm({ onSubmit, isLoading }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const e = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) e.email = "Email invalide";
    if (!phone || phone.length < 10) e.phone = "Numéro invalide";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (validate()) onSubmit({ email, phone });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col h-[calc(100vh-100px)] px-5 py-6 overflow-hidden"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Recevez votre programme</h2>
        <p className="text-gray-500">Entrez vos coordonnées pour recevoir votre plan de challenge en 28 jours</p>
      </div>

      <div className="flex-1 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Adresse email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className={`pl-12 h-14 rounded-xl border-2 ${errors.email ? "border-red-300" : "border-gray-200"} focus:border-indigo-500`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Numéro de téléphone</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="06 12 34 56 78"
              className={`pl-12 h-14 rounded-xl border-2 ${errors.phone ? "border-red-300" : "border-gray-200"} focus:border-indigo-500`}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 rounded-xl p-3">
          <Lock className="w-4 h-4" />
          <span>Vos données sont sécurisées et ne seront jamais partagées</span>
        </div>
      </div>

      <div className="py-6">
        <Button
          onClick={submit}
          disabled={isLoading}
          className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-2xl shadow-lg shadow-indigo-200"
        >
          {isLoading ? "Envoi en cours..." : "Recevoir mon programme"}
        </Button>
      </div>
    </motion.div>
  );
}
