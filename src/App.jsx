// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Sidebar from './components/Sidebar';
import Skills from './pages/Skills'; 


function App() {
  return (
    <div className="bg-gradient-to-br from-sky-100 via-purple-100 to-blue-100 min-h-screen py-10 px-4 md:px-20 scroll-smooth">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
</Routes>

    </div>
  );
}

export default App;
