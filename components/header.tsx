"use client";
import { useState } from "react";
import { Menu, X, User , Settings,LogOut} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white  shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Menu button (left side) */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 "
          >
            <Menu className="h-6 w-6" />
          </button>

 {/* User dropdown (right side) */}
<div className="relative">
  <button
    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
    className="p-2 rounded-full text-gray-500 hover:text-gray-600 hover:bg-gray-100  transition-colors duration-200"
  >
    <User className="h-5 w-5" />
    <span className="sr-only">User menu</span>
  </button>

  {isUserDropdownOpen && (
    <div className="absolute right-0 mt-2 w-48 bg-white  rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
      <Link
        href="/admin/settings"
        className="flex items-center px-4 py-2 text-sm text-gray-700  hover:bg-gray-100  transition-colors"
        onClick={() => setIsUserDropdownOpen(false)}
      >
        <Settings className="h-4 w-4 mr-2" />
        Settings
      </Link>
      <Link
        href="/admin/logout"
        className="flex items-center px-4 py-2 text-sm text-gray-700  hover:bg-gray-100  transition-colors"
        onClick={() => setIsUserDropdownOpen(false)}
      >
        <LogOut className="h-4 w-4 mr-2" />
        Logout
      </Link>
    </div>
  )}
</div>
        </div>
      </div>
    </header>
  );
}