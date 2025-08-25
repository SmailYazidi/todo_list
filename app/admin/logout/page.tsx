"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from '@/components/LoadingAdmin';
export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // تسجيل الخروج ثم إعادة التوجيه إلى صفحة تسجيل الدخول
    signOut({ redirect: false }).then(() => {
      router.push("/");
    });
  }, [router]);

  return (
<Loading />
  );
}
