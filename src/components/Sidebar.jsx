// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, GraduationCap, Briefcase, Code2, FolderGit2, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/education', label: 'Education', icon: GraduationCap },
  { to: '/experience', label: 'Experience', icon: Briefcase },
  { to: '/skills', label: 'Skills', icon: Code2 },
  { to: '/projects', label: 'Projects', icon: FolderGit2 },
  { to: '/contact', label: 'Contact', icon: Mail },
];

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar (right) */}
      <nav className="hidden md:flex fixed top-10 right-6 flex-col gap-1 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm p-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className="relative px-4 py-2 rounded-xl text-sm font-medium">
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active-pill"
                    className="absolute inset-0 bg-accent-600 dark:bg-accent-500 rounded-xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 flex items-center gap-3 transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
        <div className="mt-1 pt-1 border-t border-slate-200 dark:border-slate-700">
          <ThemeToggle className="w-full px-4 py-2" />
        </div>
      </nav>

      {/* Mobile Navbar (top, scrollable) */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex items-center gap-2 px-3 py-2 overflow-x-auto scrollbar-hide">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className="relative shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium">
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="mobile-active-pill"
                      className="absolute inset-0 bg-accent-50 dark:bg-accent-500/20 rounded-lg"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative z-10 flex flex-col items-center gap-1 transition-colors ${
                      isActive ? 'text-accent-700 dark:text-accent-300' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <Icon size={18} />
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
          <ThemeToggle className="shrink-0 p-2 ml-1" />
        </div>
      </div>
    </>
  );
}
