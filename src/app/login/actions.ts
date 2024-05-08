"use server";

// Define form state type
type FormState = { msg: string } | null;

// Login function
export async function login(prevState: FormState, formData: FormData) {
  const email = formData.get("email") as string;
  return { msg: "success" };
}
