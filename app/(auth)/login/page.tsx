"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setToken } from "@/app/lib/auth"; // adjust if needed

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    // simulate login (replace later with real API)
    setToken();

    // redirect without allowing back to login
    router.replace("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-64"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-64"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        className="bg-black text-white px-4 py-2 w-64"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}
