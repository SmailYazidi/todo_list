"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check session storage after component mounts
    const savedDarkMode = sessionStorage.getItem('darkMode');
    setIsDarkMode(savedDarkMode ? JSON.parse(savedDarkMode) : false);
  }, []);

  const themeClasses = {
    bg: isDarkMode ? 'bg-black' : 'bg-[#f5f5dc]',
    text: isDarkMode ? "text-white" : "text-gray-900",
    dotColor: isDarkMode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"
  };

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 ${themeClasses.bg} ${themeClasses.text}`}>
      <div className="loading-dots" aria-label="Loading">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <style jsx>{`
        .loading-dots {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .loading-dots span {
          width: 8px;
          height: 8px;
          background-color: ${themeClasses.dotColor};
          border-radius: 50%;
          animation: bounce 1s infinite ease-in-out both;
        }

        .loading-dots span:nth-child(1) {
          animation-delay: 0s;
        }
        .loading-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .loading-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.3;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}