// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';
import Sidebar from './components/Sidebar';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 pt-20 pb-10 px-4 md:pt-10 md:pl-4 md:pr-40">
      <Sidebar />
      <main className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
