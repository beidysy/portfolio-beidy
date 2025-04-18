// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const navLinkClass = ({ isActive }) =>
    `font-medium px-3 py-2 rounded ${
      isActive ? 'text-purple-700 font-semibold' : 'text-gray-700 hover:text-purple-600'
    }`;

  return (
    <>
      {/* Mobile Navbar (top) */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white/70 backdrop-blur-sm shadow-md z-50 flex justify-center gap-6 py-3">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/education" className={navLinkClass}>Education</NavLink>
        <NavLink to="/experience" className={navLinkClass}>Experience</NavLink>
        <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
      </div>

      {/* Desktop Sidebar (right) */}
      <div className="hidden md:flex fixed top-0 right-4 lg:right-10 h-screen pt-32 flex-col gap-4 text-right z-50">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/education" className={navLinkClass}>Education</NavLink>
        <NavLink to="/experience" className={navLinkClass}>Experience</NavLink>
        <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
      </div>
    </>
  );
}
