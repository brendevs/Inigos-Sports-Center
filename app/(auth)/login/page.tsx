"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/app/lib/firebase";

type Mode = "login" | "signup";

interface Rule {
  label: string;
  test: (pw: string) => boolean;
}

const passwordRules: Rule[] = [
  { label: "8+ characters", test: (pw) => pw.length >= 8 },
  { label: "Uppercase letter", test: (pw) => /[A-Z]/.test(pw) },
  { label: "Lowercase letter", test: (pw) => /[a-z]/.test(pw) },
  { label: "Number", test: (pw) => /\d/.test(pw) },
  {
    label: "Special character",
    test: (pw) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pw),
  },
];

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const allRulesPassed = passwordRules.every((r) => r.test(password));
  const passwordsMatch =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;
  const passwordsMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = async () => {
    setError("");

    if (mode === "signup" && !allRulesPassed) {
      setError("Please meet all password requirements.");
      return;
    }

    if (mode === "signup" && !passwordsMatch) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      router.push("/home");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const switchMode = (newMode: Mode) => {
    setMode(newMode);
    setError("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-80 flex flex-col gap-5">
        <p
          style={{ fontFamily: "Satisfy" }}
          className="text-xl md:text-2xl text-orange-600 text-center"
        >
          Iñigos
        </p>

        {/* Tab Switcher */}
        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => switchMode("login")}
            className={`flex-1 py-2 text-sm font-medium transition-colors ${
              mode === "login"
                ? "bg-black text-white"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => switchMode("signup")}
            className={`flex-1 py-2 text-sm font-medium transition-colors ${
              mode === "signup"
                ? "bg-black text-white"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            Sign up
          </button>
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-2xl font-extrabold ">
            {mode === "login" ? "Welcome back" : "Create account"}
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            {mode === "login"
              ? "Sign in to your account"
              : "Fill in the details below"}
          </p>
        </div>

        {/* Fields */}
        <input
          className="p-2 w-full bg-gray-100 rounded-lg text-sm border border-transparent focus:border-gray-300 focus:outline-none"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2 w-full bg-gray-100 rounded-lg text-sm border border-transparent focus:border-gray-300 focus:outline-none"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Live password rules — only on signup */}
        {mode === "signup" && password.length > 0 && (
          <div className="flex flex-col gap-1 -mt-3">
            {passwordRules.map((rule) => {
              const passed = rule.test(password);
              return (
                <div key={rule.label} className="flex items-center gap-2">
                  <span
                    className={`text-xs font-medium transition-colors ${
                      passed ? "text-green-500" : "text-gray-300"
                    }`}
                  >
                    {passed ? "✓" : "○"}
                  </span>
                  <span
                    className={`text-xs transition-colors ${
                      passed ? "text-green-500 font-medium" : "text-gray-400"
                    }`}
                  >
                    {rule.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Confirm password — only on signup */}
        {/* Confirm password — only on signup */}
        {mode === "signup" && (
          <div className="flex flex-col gap-1">
            <input
              disabled={!allRulesPassed}
              className={`p-2 w-full bg-gray-100 rounded-lg text-sm border focus:outline-none transition-colors ${
                !allRulesPassed
                  ? "opacity-50 cursor-not-allowed"
                  : passwordsMatch
                    ? "border-green-400 focus:border-green-400"
                    : passwordsMismatch
                      ? "border-red-300 focus:border-red-300"
                      : "border-transparent focus:border-gray-300"
              }`}
              placeholder="Confirm password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* Hint when password requirements not yet met */}
            {!allRulesPassed && (
              <p className="text-xs text-gray-400">
                Complete password requirements first
              </p>
            )}

            {/* Match indicator — only when field is active */}
            {allRulesPassed && confirmPassword.length > 0 && (
              <p
                className={`text-xs font-medium transition-colors ${
                  passwordsMatch ? "text-green-500" : "text-red-400"
                }`}
              >
                {passwordsMatch
                  ? "✓ Passwords match"
                  : "✗ Passwords do not match"}
              </p>
            )}
          </div>
        )}

        {/* Forgot password — only on login */}
        {mode === "login" && (
          <p className="text-xs text-blue-500 -mt-3 cursor-pointer hover:underline">
            Forgot password?
          </p>
        )}

        {/* Error message */}
        {error && <p className="text-xs text-red-500 -mt-2">{error}</p>}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-black text-white py-2 w-full rounded-full text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          {loading
            ? "Please wait..."
            : mode === "login"
              ? "Login"
              : "Create account"}
        </button>
      </div>
    </div>
  );
}
