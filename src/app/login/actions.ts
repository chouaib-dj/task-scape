"use server";

import { createClient } from "@/utils/supabase/server";

// Define form state type
type FormState = { msg: string } | null;

// Login function
export async function login(prevState: FormState, formData: FormData) {
  const supabase = createClient();
  const email = formData.get("email") as string;
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_ORIGIN_URL}`,
    },
  });
  if (error) return { msg: "err" };
  return { msg: "success" };
}
