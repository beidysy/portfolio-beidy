// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const navLinkClass = ({ isActive }) =>
    `relative transition-all duration-500 ease-in-out transform hover:scale-105 font-medium text-lg tracking-wide 
     ${isActive ? 'text-purple-700 font-bold' : 'text-gray-700 hover:text-purple-600'}`;

  return (
    <div className="fixed top-0 right-2 md:right-6 h-screen pt-32 px-6 py-8 z-50 
      flex flex-col gap-6 items-end rounded-bl-[2rem]
      bg-white/15 backdrop-blur-2xl shadow-2xl border border-white/20 
      transition-all duration-700 ease-in-out hover:shadow-purple-200">
      
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
      <NavLink to="/education" className={navLinkClass}>Education</NavLink>
      <NavLink to="/experience" className={navLinkClass}>Experience</NavLink>
      <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
      <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
    </div>
  );
}
