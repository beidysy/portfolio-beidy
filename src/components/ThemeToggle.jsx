// src/components/ThemeToggle.jsx
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ className = '' }) {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label="Toggle dark mode"
      className={`flex items-center justify-center rounded-xl text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${className}`}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
