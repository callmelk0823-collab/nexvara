import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Zap, Mail, Lock, User as UserIcon, ArrowRight, Eye, EyeOff, Sparkles, Check, AlertCircle } from 'lucide-react';
import { authApi } from '../api';

// ── GlowOrb Component ──
function GlowOrb({ color, size, top, left, opacity = 0.18 }: { color: string; size: number; top: string; left: string; opacity?: number }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        background: color,
        width: size,
        height: size,
        top,
        left,
        filter: `blur(${size * 0.45}px)`,
        opacity,
        zIndex: 0,
      }}
    />
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [apiSuccess, setApiSuccess] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    setApiError(null);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!isLogin && !formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    setApiSuccess(null);

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      if (isLogin) {
        // Sign In
        const data = await authApi.login(formData.email, formData.password);
        authApi.setSession(data.token, data.user);
        setApiSuccess(`Welcome back, ${data.user.name}! Redirecting...`);
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        // Sign Up
        const data = await authApi.register(formData.name, formData.email, formData.password);
        authApi.setSession(data.token, data.user);
        setApiSuccess(`Account created successfully! Welcome, ${data.user.name}! Redirecting...`);
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (err: any) {
      setApiError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#04040f] text-[#e2e4f0] relative flex items-center justify-center px-4 overflow-hidden">
      {/* Background Glowing Orbs */}
      <GlowOrb color="#4f6ef7" size={600} top="-10%" left="-15%" opacity={0.2} />
      <GlowOrb color="#7c3aed" size={500} top="50%" left="65%" opacity={0.15} />

      <div className="w-full max-w-md z-10">
        {/* Logo / Title */}
        <div className="flex flex-col items-center mb-8 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4f6ef7] to-[#7c3aed] flex items-center justify-center shadow-[0_0_24px_rgba(79,110,247,0.4)] mb-3">
            <Zap size={24} className="text-white" />
          </div>
          <span style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-white font-bold text-2xl tracking-tight">
            Nexvara
          </span>
          <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-sm mt-1">
            Cloud Placement & Compute Platform
          </p>
        </div>

        {/* Card */}
        <div className="backdrop-blur-2xl bg-[rgba(10,10,28,0.75)] border border-[rgba(79,110,247,0.15)] shadow-[0_12px_40px_rgba(4,4,15,0.8)] rounded-2xl p-8">
          {/* Tabs */}
          <div className="flex border-b border-[rgba(79,110,247,0.12)] mb-6">
            <button
              onClick={() => {
                setIsLogin(true);
                setApiError(null);
                setApiSuccess(null);
                setValidationErrors({});
              }}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className={`flex-1 pb-3 text-sm font-semibold transition-all border-b-2 text-center ${
                isLogin
                  ? 'border-[#4f6ef7] text-white'
                  : 'border-transparent text-[#7b80a8] hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                setApiError(null);
                setApiSuccess(null);
                setValidationErrors({});
              }}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className={`flex-1 pb-3 text-sm font-semibold transition-all border-b-2 text-center ${
                !isLogin
                  ? 'border-[#4f6ef7] text-white'
                  : 'border-transparent text-[#7b80a8] hover:text-white'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Feedback Messages */}
          {apiError && (
            <div className="mb-5 flex items-start gap-2 bg-[rgba(239,68,68,0.1)] border border-red-500/20 text-red-400 p-3 rounded-lg text-sm">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <span style={{ fontFamily: "'DM Sans', sans-serif" }}>{apiError}</span>
            </div>
          )}
          {apiSuccess && (
            <div className="mb-5 flex items-start gap-2 bg-[rgba(16,185,129,0.1)] border border-emerald-500/20 text-emerald-400 p-3 rounded-lg text-sm">
              <Check size={16} className="mt-0.5 shrink-0" />
              <span style={{ fontFamily: "'DM Sans', sans-serif" }}>{apiSuccess}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name field (Register only) */}
            {!isLogin && (
              <div>
                <label style={{ fontFamily: "'DM Sans', sans-serif" }} className="block text-xs font-semibold text-[#7b80a8] uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#565c8f]">
                    <UserIcon size={18} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    placeholder="John Doe"
                    disabled={isLoading}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg bg-[rgba(255,255,255,0.03)] border transition-all text-sm outline-none text-white focus:bg-[rgba(255,255,255,0.05)] ${
                      validationErrors.name
                        ? 'border-red-500/50 focus:border-red-500'
                        : 'border-[rgba(79,110,247,0.15)] focus:border-[#4f6ef7] focus:ring-1 focus:ring-[#4f6ef7]'
                    }`}
                  />
                </div>
                {validationErrors.name && (
                  <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-red-400 text-xs mt-1.5">{validationErrors.name}</p>
                )}
              </div>
            )}

            {/* Email field */}
            <div>
              <label style={{ fontFamily: "'DM Sans', sans-serif" }} className="block text-xs font-semibold text-[#7b80a8] uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#565c8f]">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  placeholder="you@example.com"
                  disabled={isLoading}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-lg bg-[rgba(255,255,255,0.03)] border transition-all text-sm outline-none text-white focus:bg-[rgba(255,255,255,0.05)] ${
                    validationErrors.email
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-[rgba(79,110,247,0.15)] focus:border-[#4f6ef7] focus:ring-1 focus:ring-[#4f6ef7]'
                  }`}
                />
              </div>
              {validationErrors.email && (
                <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-red-400 text-xs mt-1.5">{validationErrors.email}</p>
              )}
            </div>

            {/* Password field */}
            <div>
              <label style={{ fontFamily: "'DM Sans', sans-serif" }} className="block text-xs font-semibold text-[#7b80a8] uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#565c8f]">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  placeholder="••••••••"
                  disabled={isLoading}
                  className={`w-full pl-10 pr-10 py-2.5 rounded-lg bg-[rgba(255,255,255,0.03)] border transition-all text-sm outline-none text-white focus:bg-[rgba(255,255,255,0.05)] ${
                    validationErrors.password
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-[rgba(79,110,247,0.15)] focus:border-[#4f6ef7] focus:ring-1 focus:ring-[#4f6ef7]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#565c8f] hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {validationErrors.password && (
                <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-red-400 text-xs mt-1.5">{validationErrors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="relative w-full group py-3 rounded-lg text-sm font-semibold text-white overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_4px_20px_rgba(79,110,247,0.15)] hover:shadow-[0_4px_24px_rgba(79,110,247,0.3)] mt-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed] group-hover:opacity-95 transition-opacity" />
              <div className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </div>
            </button>
          </form>

          {/* Switch link */}
          <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="mt-6 text-center text-xs text-[#7b80a8]">
            <button
              onClick={() => navigate('/')}
              className="hover:text-white transition-colors underline decoration-dotted underline-offset-4"
            >
              Back to Landing Page
            </button>
          </div>
        </div>

        {/* Footer info */}
        <p style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-center text-[10px] text-[#3a3f60] mt-8">
          Secure JWT Session · SHA-256 Hashed Passwords
        </p>
      </div>
    </div>
  );
}
