// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const navLinkClass = ({ isActive }) =>
    `font-medium shrink-0 ${
      isActive ? 'text-purple-700 font-semibold' : 'text-gray-700 hover:text-purple-600'
    }`;

  return (
    <>
      {/* Desktop Sidebar (right) */}
      <div className="hidden md:flex fixed top-0 right-4 md:right-10 h-screen pt-32 flex-col gap-4 z-50">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/education" className={navLinkClass}>Education</NavLink>
        <NavLink to="/experience" className={navLinkClass}>Experience</NavLink>
        <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
      </div>

      {/* Mobile Navbar (top, scrollable) */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md">
        <div className="flex items-center gap-6 px-4 py-3 overflow-x-auto scrollbar-hide">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/education" className={navLinkClass}>Education</NavLink>
          <NavLink to="/experience" className={navLinkClass}>Experience</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>
      </div>
    </>
  );
}
