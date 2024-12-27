"use client";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { useFormStatus } from "react-dom";
import { SiGithub } from "react-icons/si";

export const SignIn = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  return (
    <SignInButton>
      <Button
        type="button"
        className="glass flex h-5 w-full items-center justify-center gap-2 bg-[#898989] px-2 py-0.5 text-[#131313] lg:w-[160px]"
        {...props}
      >
        <SiGithub />
        SignIn
      </Button>
    </SignInButton>
  );
};

export const Submit = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className={`glass flex h-5 w-full items-center justify-center gap-2 gap-x-2 bg-[#898989] px-2 py-0.5 text-[#131313] lg:w-[160px] ${pending ? "cursor-not-allowed" : ""} ${props.className ? props.className : ""}`}
      disabled={pending || props.disabled}
      {...props}
    >
      {pending ? "Loading..." : "Submit"}
    </Button>
  );
};
