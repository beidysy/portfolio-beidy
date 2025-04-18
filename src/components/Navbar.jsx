function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Beidy Sy</h1>
  
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <a href="#about" className="hover:text-purple-400 transition">About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  