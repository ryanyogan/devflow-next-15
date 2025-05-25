"use client";

import { ROUTES } from "@/constants/routes";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "../ui/button";

export function SocialAuthForm() {
  async function handleSignIn(provider: "github" | "google") {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });

      toast.success("Successfully signed in!");
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("An error occurred while signing in. Please try again.");
    }
  }

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        onClick={() => handleSignIn("github")}
        className="cursor-pointer rounded-2 background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5"
      >
        <Image
          src="/icons/github.svg"
          alt="GitHub"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button
        onClick={() => handleSignIn("google")}
        className="cursor-pointer rounded-2 background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5"
      >
        <Image
          src="/icons/google.svg"
          alt="Google"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
}
