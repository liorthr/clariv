import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import QuizHeader from "../components/QuizHeader.jsx";
import IntroScreen from "../components/IntroScreen.jsx";
import QuestionScreen from "../components/QuestionScreen.jsx";
import SocialProofScreen from "../components/SocialProofScreen.jsx";
import ProfileScreen from "../components/ProfileScreen.jsx";
import LoadingScreen from "../components/LoadingScreen.jsx";
import ContactForm from "../components/ContactForm.jsx";
import PricingScreen from "../components/PricingScreen.jsx";
import ThankYouScreen from "../components/ThankYou.jsx";
import { createQuizLead } from "../lib/supabase.js";

const TOTAL_STEPS = 10;

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const answer = (field, value) => {
    setAnswers((a) => ({ ...a, [field]: value }));
    setStep((s) => s + 1);
  };

  const back = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const submitContact = async (contact) => {
    setIsLoading(true);
    try {
      await createQuizLead({ ...answers, email: contact.email, phone: contact.phone });
      setAnswers((a) => ({ ...a, ...contact }));
      setStep((s) => s + 1);
    } catch (err) {
      console.error("Error saving lead:", err);
    }
    setIsLoading(false);
  };

  const header = (n, showProgress = true) => (
    <QuizHeader step={n} totalSteps={TOTAL_STEPS} onBack={back} showProgress={showProgress} />
  );

  const renderStep = () => {
    switch (step) {
      case 0:
        return <IntroScreen key={0} onStart={(v) => answer("used_ai", v)} />;
      case 1:
        return (
          <div key={1}>
            {header(1)}
            <QuestionScreen
              question="Quel âge avez-vous ?"
              subtitle="Nous personnaliserons votre challenge IA selon vos réponses"
              options={[
                { label: "-45 ans", value: "-45" },
                { label: "Entre 45 et 55 ans", value: "45-55" },
                { label: "+55 ans", value: "+55" },
              ]}
              onSelect={(v) => answer("age_range", v)}
            />
          </div>
        );
      case 2:
        return (
          <div key={2}>
            {header(2)}
            <QuestionScreen
              question="Avez-vous déjà utilisé ChatGPT ?"
              subtitle="Cela nous aide à adapter le niveau de la formation"
              options={[
                { label: "Oui", value: "oui" },
                { label: "Non", value: "non" },
              ]}
              onSelect={(v) => answer("used_chatgpt", v)}
            />
          </div>
        );
      case 3:
        return (
          <div key={3}>
            {header(3)}
            <QuestionScreen
              question="Combien pensez-vous générer d'argent avec l'IA sur 1 an ?"
              subtitle="Définissez votre objectif de revenus"
              options={[
                { label: "-50 000€", value: "-50000" },
                { label: "Entre 50 000€ et 100 000€", value: "50000-100000" },
                { label: "+100 000€", value: "+100000" },
              ]}
              onSelect={(v) => answer("income_goal", v)}
            />
          </div>
        );
      case 4:
        return (
          <div key={4}>
            {header(4, false)}
            <SocialProofScreen onContinue={() => setStep(5)} />
          </div>
        );
      case 5:
        return (
          <div key={5}>
            {header(5)}
            <QuestionScreen
              question="Notez vos connaissances en IA"
              subtitle="Évaluez votre niveau actuel"
              options={[
                { label: "Débutant", value: "debutant" },
                { label: "Intermédiaire", value: "intermediaire" },
                { label: "Expert", value: "expert" },
              ]}
              onSelect={(v) => answer("ai_level", v)}
              useColoredOptions
            />
          </div>
        );
      case 6:
        return (
          <div key={6}>
            {header(6)}
            <ProfileScreen answers={answers} onContinue={() => setStep(7)} />
          </div>
        );
      case 7:
        return (
          <div key={7}>
            {header(7, false)}
            <LoadingScreen onComplete={() => setStep(8)} />
          </div>
        );
      case 8:
        return (
          <div key={8}>
            {header(8)}
            <ContactForm onSubmit={submitContact} isLoading={isLoading} />
          </div>
        );
      case 9:
        return <PricingScreen key={9} />;
      case 10:
        return (
          <div key={10}>
            <QuizHeader step={10} totalSteps={TOTAL_STEPS} onBack={() => {}} showProgress={false} />
            <ThankYouScreen />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto">
      <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
    </div>
  );
}
