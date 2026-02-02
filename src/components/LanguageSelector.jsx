"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get current language from URL or default to EN
  const currentLang = searchParams.get("lang")?.toUpperCase() || "EN";

  const languages = [
    { code: "EN", label: "English" },
    { code: "FR", label: "French" },
  ];

  const handleSelect = (langCode) => {
    setIsOpen(false);
    // Push new URL with search params
    router.push(`/?lang=${langCode.toLowerCase()}`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all focus:ring-2 focus:ring-indigo-100 outline-none"
      >
        <span>{currentLang}</span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close on click outside */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 z-20 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className={`font-medium ${currentLang === lang.code ? "text-indigo-600" : "text-slate-700"}`}>
                    {lang.code}
                  </span>
                  <span className="text-slate-400 text-xs">{lang.label}</span>
                </div>
                {currentLang === lang.code && (
                  <Check className="w-4 h-4 text-indigo-600" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
