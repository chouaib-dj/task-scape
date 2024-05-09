import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";
import { UseFormTrigger } from "react-hook-form";

const LoginButton = ({
  isValid,
  trigger,
}: {
  isValid: boolean;
  trigger: UseFormTrigger<{
    email: string;
  }>;
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className="w-full"
      type="submit"
      onClick={async (e) => {
        // Trigger form validation before submission
        const canGo = await trigger(["email"]);
        if (!canGo) {
          e.preventDefault();
          return;
        }
      }}
      disabled={!isValid}
      isLoading={pending}
    >
      Send Magic Link
    </Button>
  );
};

export default LoginButton;
