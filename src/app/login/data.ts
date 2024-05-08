import { z } from "zod";

export const formSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
});
export type LoginValues = z.infer<typeof formSchema>;

export const DEFAULT_FORM_VALUES = {
  email: "",
};
