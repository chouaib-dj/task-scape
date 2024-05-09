"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import LoginButton from "./_components/login-button";
import { login } from "./actions";
import { DEFAULT_FORM_VALUES, LoginValues, formSchema } from "./data";

// The main Login component
export default function Login() {
  // Initialize the form with Zod validation and default values
  const form = useForm<LoginValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: DEFAULT_FORM_VALUES,
  });

  // Initialize form state and form action
  const [state, formAction] = useFormState(login, null);

  // Handle state changes and display toasts for success or failure
  useEffect(() => {
    if (state?.msg) {
      const isValid = state.msg === "success"; // Check if message indicates success
      const timeout = setTimeout(() => {
        toast({
          title: isValid
            ? "Magic link sent! Check your email."
            : "Couldn't send link. Try again.",
          variant: isValid ? "success" : "destructive", // Variant based on success or failure
          duration: 5000, // Duration of the toast message in milliseconds
        });
      }, 0);

      if (isValid) form.reset(); // Reset form on success

      return () => clearTimeout(timeout); // Clear timeout when unmounting
    }
  }, [state]);

  return (
    // Main form layout
    <main className="flex justify-center items-center min-h-screen py-20">
      <Form {...form}>
        <form className="space-y-5 px-4" action={formAction}>
          <Card className="w-full max-w-sm p-2 sm:p-4">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Receive an instant magic link in your email for secure access.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="username@mail.com"
                        autoComplete="off"
                        className={cn(
                          form.getFieldState("email").error &&
                            "placeholder:text-destructive text-destructive"
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="pt-2">
              <LoginButton
                trigger={form.trigger}
                isValid={form.formState.isValid}
              />
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  );
}
