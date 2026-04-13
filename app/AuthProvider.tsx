"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { auth } from "@/app/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const isLoginPage = pathname === "/login";

      if (user && isLoginPage) {
        router.replace("/home");
      }

      if (!user && !isLoginPage) {
        router.replace("/login");
      }
    });

    return () => unsubscribe();
  }, [router, pathname]);

  return <>{children}</>;
}
