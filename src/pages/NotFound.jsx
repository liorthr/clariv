import { useLocation, Link } from "react-router-dom";

export default function NotFound() {
  const page = useLocation().pathname.substring(1);
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-7xl font-light text-slate-300">404</h1>
          <div className="h-0.5 w-16 bg-slate-200 mx-auto" />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-medium text-slate-800">Page introuvable</h2>
          <p className="text-slate-600 leading-relaxed">
            La page <span className="font-medium text-slate-700">"{page}"</span> n'existe pas.
          </p>
        </div>
        <Link to="/" className="inline-block text-indigo-600 underline">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
