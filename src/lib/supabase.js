import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && key ? createClient(url, key) : null;

// Remplace base44.entities.QuizLead.create(...)
export async function createQuizLead(lead) {
  if (!supabase) {
    console.warn("Supabase n'est pas configuré (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY).");
    return;
  }
  const { error } = await supabase.from("quiz_leads").insert({
    used_ai: lead.used_ai ?? null,
    age_range: lead.age_range ?? null,
    used_chatgpt: lead.used_chatgpt ?? null,
    income_goal: lead.income_goal ?? null,
    ai_level: lead.ai_level ?? null,
    email: lead.email,
    phone: lead.phone,
  });
  if (error) throw error;
}
