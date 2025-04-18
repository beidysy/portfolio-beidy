// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const navLinkClass = ({ isActive }) =>
    `text-right font-medium ${
      isActive ? 'text-purple-700 font-semibold' : 'text-gray-700 hover:text-purple-600'
    }`;

  return (
    <div className="fixed top-0 right-4 md:right-10 h-screen pt-32 hidden md:flex flex-col gap-4">
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
      <NavLink to="/education" className={navLinkClass}>Education</NavLink>
      <NavLink to="/experience" className={navLinkClass}>Experience</NavLink>
      <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
      <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
    </div>
  );
}
