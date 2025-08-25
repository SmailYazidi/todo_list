'use client';

export default function Loading() {
  return (
    <div className="bg-white text-gray-900  min-h-screen w-full flex flex-col items-center justify-center px-4 py-8">
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
          background-color:rgb(0, 0, 0); /* blue color */
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
