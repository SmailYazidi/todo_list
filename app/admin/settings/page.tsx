"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/LoadingAdmin";
import * as LucideIcons from "lucide-react";
import { useToast } from "@/hooks/use-toast"
export default function SettingsPage() {
  const [hasPassword, setHasPassword] = useState<boolean | null>(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
 const { toast } = useToast()
 
 useEffect(() => {
  const checkPassword = async () => {
    try {
      const res = await fetch("/api/settings", {
   
      });

      if (!res.ok) throw new Error("Failed to fetch settings");

      const data = await res.json();
      setHasPassword(data.hasPassword);
    } catch (err) {
      console.error("Failed to check password status:", err);
      setError("Failed to load settings");
    }
  };

  checkPassword();
}, []);

  const validatePassword = (password: string) => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecialChar,
      isValid: minLength && hasUpperCase && hasLowerCase && hasNumbers
    };
  };

  const passwordValidation = validatePassword(newPassword);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  if (newPassword !== confirmPassword) {
    setError("New passwords don't match");
    return;
  }

  if (!passwordValidation.isValid) {
    setError("Password doesn't meet the security requirements");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("/api/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_SECRET || ""
      },
      body: JSON.stringify({
        currentPassword: hasPassword ? currentPassword : undefined,
        newPassword,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to update password");
    }

    setSuccess("Password updated successfully");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setHasPassword(true);
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


  if (hasPassword === null) {
    return <Loading />;
  }

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-6">
        <LucideIcons.Settings size={24} className="text-blue-500" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          {hasPassword ? "Change Password" : "Set Password"}
        </h1>
      </div>

      {/* Error/Success Display */}
      {error && (
        <div className="mb-6">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <LucideIcons.AlertCircle size={20} className="text-red-500" />
              <span className="text-red-600 dark:text-red-400">{error}</span>
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className="mb-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <LucideIcons.CheckCircle size={20} className="text-green-500" />
              <span className="text-green-600 dark:text-green-400">{success}</span>
            </div>
          </div>
        </div>
      )}

      {/* Password Form Section */}
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <LucideIcons.Lock size={20} className="text-gray-600 dark:text-gray-300" />
          <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-200">
            Password Settings
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          {hasPassword && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <LucideIcons.KeyRound size={16} className="text-orange-500" />
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Current Password
                </label>
              </div>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                  placeholder="Enter your current password"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showCurrentPassword ? (
                    <LucideIcons.EyeOff size={16} className="text-gray-400 hover:text-gray-600" />
                  ) : (
                    <LucideIcons.Eye size={16} className="text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LucideIcons.Key size={16} className="text-green-500" />
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                New Password
              </label>
            </div>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
                minLength={8}
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showNewPassword ? (
                  <LucideIcons.EyeOff size={16} className="text-gray-400 hover:text-gray-600" />
                ) : (
                  <LucideIcons.Eye size={16} className="text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>

            {/* Password Requirements */}
            {newPassword && (
              <div className="mt-3 p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Password Requirements:
                </p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {passwordValidation.minLength ? (
                      <LucideIcons.CheckCircle size={12} className="text-green-500" />
                    ) : (
                      <LucideIcons.XCircle size={12} className="text-red-500" />
                    )}
                    <span className={`text-xs ${passwordValidation.minLength ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      At least 8 characters
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {passwordValidation.hasUpperCase ? (
                      <LucideIcons.CheckCircle size={12} className="text-green-500" />
                    ) : (
                      <LucideIcons.XCircle size={12} className="text-red-500" />
                    )}
                    <span className={`text-xs ${passwordValidation.hasUpperCase ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      One uppercase letter
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {passwordValidation.hasLowerCase ? (
                      <LucideIcons.CheckCircle size={12} className="text-green-500" />
                    ) : (
                      <LucideIcons.XCircle size={12} className="text-red-500" />
                    )}
                    <span className={`text-xs ${passwordValidation.hasLowerCase ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      One lowercase letter
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {passwordValidation.hasNumbers ? (
                      <LucideIcons.CheckCircle size={12} className="text-green-500" />
                    ) : (
                      <LucideIcons.XCircle size={12} className="text-red-500" />
                    )}
                    <span className={`text-xs ${passwordValidation.hasNumbers ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      One number
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LucideIcons.ShieldCheck size={16} className="text-purple-500" />
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                Confirm New Password
              </label>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
                minLength={8}
                placeholder="Confirm new password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showConfirmPassword ? (
                  <LucideIcons.EyeOff size={16} className="text-gray-400 hover:text-gray-600" />
                ) : (
                  <LucideIcons.Eye size={16} className="text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
            
            {confirmPassword && newPassword !== confirmPassword && (
              <div className="flex items-center gap-2 mt-1">
                <LucideIcons.XCircle size={12} className="text-red-500" />
                <span className="text-xs text-red-600 dark:text-red-400">
                  Passwords don't match
                </span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading || !passwordValidation.isValid || newPassword !== confirmPassword}
              className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <LucideIcons.Loader2 size={18} className="animate-spin" />
                  Updating Password...
                </>
              ) : (
                <>
                  <LucideIcons.Save size={18} />
                  {hasPassword ? "Update Password" : "Set Password"}
                </>
              )}
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}