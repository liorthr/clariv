import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Check, Shield, Clock } from "lucide-react";
import Button from "./Button.jsx";

// Grille de prix Stripe (identifiants publics, déjà visibles sur l'ancienne app)
const STRIPE_PRICING_TABLE_ID = "prctbl_1SiZ6cRPoHBbnJzZPd2WBrAn";
const STRIPE_PUBLISHABLE_KEY =
  "pk_live_51SUDPxRPoHBbnJzZriT7VqPtkZ8jlUAnv63BXZRfD68Z0vhztrhyzWKQZelhBZrr047d66epPYk0tDNekLQT52H600CSB8n62v";

const BENEFITS = [
  "Accès à 28 jours de formation",
  "Méthodes éprouvées pour générer des revenus",
  "Contenu adapté aux débutants 45+",
  "Support communautaire",
  "Certificat de complétion",
];

function SkillGauge({ position, borderColor }) {
  return (
    <div className="h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full">
      <div className="relative">
        <div className={`absolute ${position} -top-1 w-4 h-4 bg-white border-2 ${borderColor} rounded-full`} />
      </div>
    </div>
  );
}

export default function PricingScreen() {
  const [time, setTime] = useState({ minutes: 9, seconds: 59 });

  const scrollToPricing = () => {
    const el = document.querySelector("stripe-pricing-table");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.head.appendChild(script);

    const end = Date.now() + 1500;
    const colors = ["#6366f1", "#8b5cf6", "#ec4899"];
    const frame = () => {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();

    const timer = setInterval(() => {
      setTime((t) =>
        t.seconds > 0 ? { ...t, seconds: t.seconds - 1 } : t.minutes > 0 ? { minutes: t.minutes - 1, seconds: 59 } : t
      );
    }, 1000);

    return () => {
      clearInterval(timer);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col min-h-screen px-5 py-4 overflow-y-auto"
    >
      <div className="sticky top-0 bg-gray-900 -mx-5 px-5 py-3 mb-6 flex items-center justify-between z-50">
        <div>
          <p className="text-gray-400 text-xs">La réduction expire dans</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">{String(time.minutes).padStart(2, "0")}</span>
            <span className="text-gray-400">:</span>
            <span className="text-2xl font-bold text-white">{String(time.seconds).padStart(2, "0")}</span>
          </div>
          <div className="flex gap-4 text-xs text-gray-400">
            <span>min</span>
            <span>sec</span>
          </div>
        </div>
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <Button
            onClick={scrollToPricing}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl"
          >
            OBTENIR MON PLAN
          </Button>
        </motion.div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="font-semibold text-gray-600 mb-3">Maintenant</p>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face"
                alt="Avant"
                className="w-24 h-24 rounded-full mx-auto object-cover grayscale"
              />
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-500 mb-1">Compétences IA</p>
              <SkillGauge position="left-1/4" borderColor="border-yellow-400" />
              <span className="text-xs bg-gray-800 text-white px-2 py-0.5 rounded-full mt-1 inline-block">Modéré</span>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-1">Potentiel de revenus</p>
              <div className="h-2 bg-indigo-100 rounded-full">
                <div className="h-full w-1/3 bg-indigo-500 rounded-full" />
              </div>
              <span className="text-xs text-gray-600">Limité</span>
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-indigo-600 mb-3">Objectif</p>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Après"
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full"
              >
                +45%
              </motion.div>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-500 mb-1">Compétences IA</p>
              <SkillGauge position="left-3/4" borderColor="border-green-500" />
              <span className="text-xs bg-gray-800 text-white px-2 py-0.5 rounded-full mt-1 inline-block">Élevé</span>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-1">Potentiel de revenus</p>
              <div className="h-2 bg-indigo-100 rounded-full">
                <div className="h-full w-4/5 bg-indigo-500 rounded-full" />
              </div>
              <span className="text-xs text-indigo-600 font-medium">Élevé</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 text-center mt-4">Ceci n'est pas une garantie ou promesse de résultats.</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 mb-6 text-white">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-medium">OFFRE SPÉCIALE</span>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-5xl font-bold">0,87€</span>
          <span className="text-white/70">/jour</span>
        </div>
        <p className="text-white/80 mb-4">Programme complet sur 28 jours</p>
        <div className="flex items-center gap-2 text-sm">
          <span className="line-through text-white/50">49,99€</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full">24,36€</span>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {BENEFITS.map((b) => (
          <div key={b} className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-gray-700">{b}</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <stripe-pricing-table
          pricing-table-id={STRIPE_PRICING_TABLE_ID}
          publishable-key={STRIPE_PUBLISHABLE_KEY}
        ></stripe-pricing-table>
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Shield className="w-5 h-5 text-green-600" />
          <span>Paiement sécurisé par Stripe</span>
        </div>
      </div>

      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(99, 102, 241, 0.4)",
            "0 0 0 20px rgba(99, 102, 241, 0)",
            "0 0 0 0 rgba(99, 102, 241, 0)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="rounded-2xl"
      >
        <Button
          onClick={scrollToPricing}
          className="w-full h-16 bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold rounded-2xl"
        >
          <Clock className="w-5 h-5 mr-2" />
          OBTENIR MON PLAN MAINTENANT
        </Button>
      </motion.div>
      <p className="text-xs text-gray-400 text-center mt-4">Satisfait ou remboursé pendant 14 jours</p>
    </motion.div>
  );
}
