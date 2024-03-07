// components/Login.tsx
"use client";

// import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

function Core({ user }: { user?: AuthUser }) {
  useEffect(() => {
    if (user) {
      redirect("/members");
    }
  }, [user]);
  return null;
}

export const Login = withAuthenticator(Core, {
  variation: "default",
  initialState: "signIn",
});

export const Register = withAuthenticator(Core, {
  variation: "default",
  initialState: "signUp",
});