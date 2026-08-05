import React, { useEffect, useState } from "react";

// Toggles the `dark` class on <html>, which Tailwind's dark: variants key off.
// Only the light surfaces (Publications / Services / cards / footer) change —
// the hero stays dark green in both modes.
const STORAGE_KEY = "theme";

const systemPrefersDark = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// No stored choice → follow the OS setting; otherwise honour the saved choice.
const getInitialDark = () => {
  const stored =
    typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return systemPrefersDark();
};

export const useTheme = () => {
  const [dark, setDark] = useState(getInitialDark);

  // Reflect the current theme on <html>.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Auto-switch with the OS setting until the user makes an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) setDark(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Persist only when the user toggles manually, so auto-follow keeps working
  // for anyone who hasn't overridden it.
  const setThemeManual = (value) =>
    setDark((prev) => {
      const next = typeof value === "function" ? value(prev) : value;
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      return next;
    });

  return [dark, setThemeManual];
};

// Read-only view of the current theme for components that need it in JS
// (e.g. inline styles that can't use Tailwind's dark: variants). Observes the
// `dark` class on <html> so it stays in sync no matter who flips the toggle.
export const useIsDark = () => {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const mo = new MutationObserver(update);
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  return isDark;
};

const SunIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const ThemeToggle = ({ className = "" }) => {
  const [dark, setDark] = useTheme();

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors text-black/60 hover:text-black bg-black/5 hover:bg-black/10 dark:text-secondary dark:hover:text-white dark:bg-white/5 dark:hover:bg-white/15 ${className}`}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
