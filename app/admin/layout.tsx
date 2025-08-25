"use client";
import { Toaster } from "@/components/ui/toaster"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import Header from "@/components/header";
import Sidebar from "@/components/sidbar";
import Loading from '@/components/LoadingAdmin';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();



  // Check session
  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (!session) {
        router.push("/");
      } else {
        setLoading(false);
      }
    };
    checkSession();
  }, [router]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  if (loading) {
    return (
<Loading/>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 ">
                <Toaster />
      <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto mt-16">{children}</main>
      </div>
    </div>
  );
}
