// src/components/InteractiveTerminal.jsx
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotateCcw } from 'lucide-react';

const ROUTES = {
  home: '/',
  skills: '/skills',
  projects: '/projects',
  experience: '/experience',
  education: '/education',
  contact: '/contact',
};

const HELP_LINES = [
  'Available commands:',
  '  help          show this list',
  '  whoami        who am I?',
  '  about         short bio',
  '  skills        open the skills page',
  '  projects      open the projects page',
  '  experience    open the experience page',
  '  education     open the education page',
  '  contact       open the contact page',
  '  resume        download my resume',
  '  ls            list site sections',
  '  clear         clear the screen',
];

const INITIAL_LINES = [
  '➜ ~ cat aboutme.txt',
  '',
  'Hello, welcome to my digital terminal.',
  '',
  "I'm Beidy Sy — Cybersecurity & IT Operations Specialist.",
  'Bilingual: Fluent in French and English.',
  '',
  "Type 'help' to see what I can do.",
].map((text) => ({ type: 'output', text }));

export default function InteractiveTerminal() {
  const navigate = useNavigate();
  const [lines, setLines] = useState(INITIAL_LINES);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: 'nearest' });
  }, [lines]);

  const print = (text) => {
    setLines((prev) => [...prev, ...text.split('\n').map((t) => ({ type: 'output', text: t }))]);
  };

  const resetTerminal = () => {
    setLines(INITIAL_LINES);
    setInput('');
    setHistory([]);
    setHistoryIndex(null);
    inputRef.current?.focus();
  };

  const goTo = (key) => {
    print(`Opening ~/${key} ...`);
    setTimeout(() => navigate(ROUTES[key]), 450);
  };

  const runCommand = (raw) => {
    const cmd = raw.trim();
    setLines((prev) => [...prev, { type: 'input', text: cmd }]);
    if (!cmd) return;

    const [name, ...args] = cmd.toLowerCase().split(/\s+/);

    switch (name) {
      case 'help':
        print(HELP_LINES.join('\n'));
        break;
      case 'whoami':
        print('beidy-sy — cybersecurity & IT operations specialist');
        break;
      case 'about':
        print(
          [
            "I'm Beidy Sy — Cybersecurity & IT Operations Specialist.",
            'Experienced in DevOps, data analysis, and secure system design.',
            'Skilled in Python, Linux, Docker, SQL, and automation tools.',
            'Bilingual: Fluent in French and English.',
          ].join('\n')
        );
        break;
      case 'ls':
        print('about.txt  skills/  projects/  experience/  education/  contact.sh  resume.pdf');
        break;
      case 'clear':
        setLines([]);
        return;
      case 'sudo':
        print('Permission denied: nice try 😄');
        break;
      case 'resume': {
        const link = document.createElement('a');
        link.href = '/Beidy_Sy_Resume.pdf';
        link.download = '';
        link.click();
        print('Downloading resume...');
        break;
      }
      case 'cd': {
        const target = (args[0] || '').replace(/\/$/, '').replace(/^~$/, 'home');
        if (target === '' || target === 'home' || target === '..') {
          goTo('home');
        } else if (ROUTES[target]) {
          goTo(target);
        } else {
          print(`cd: ${args[0] || ''}: No such directory`);
        }
        break;
      }
      case 'home':
        goTo('home');
        break;
      case 'skills':
      case 'projects':
      case 'experience':
      case 'education':
      case 'contact':
        goTo(name);
        break;
      default:
        print(`command not found: ${name} — type 'help' for available commands`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(input);
      if (input.trim()) setHistory((prev) => [...prev, input]);
      setHistoryIndex(null);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    }
  };

  return (
    <div
      className="bg-gray-900 text-green-300 font-mono rounded-lg shadow-xl border border-gray-700 overflow-hidden flex flex-col cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700 shrink-0">
        <div className="flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-white text-sm">beidy@portfolio: ~</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            resetTerminal();
          }}
          aria-label="Restart terminal"
          title="Restart terminal"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <RotateCcw size={14} />
        </button>
      </div>

      <div className="p-6 text-sm overflow-y-auto h-72 md:h-96">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-words leading-relaxed">
            {line.type === 'input' ? <span className="text-white">➜ ~ {line.text}</span> : line.text || ' '}
          </div>
        ))}

        <div className="flex items-center gap-2 text-white">
          <span className="shrink-0">➜ ~</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
            placeholder="type a command..."
            aria-label="Terminal command input"
            className="flex-1 bg-transparent outline-none caret-green-400 placeholder:text-gray-500"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
