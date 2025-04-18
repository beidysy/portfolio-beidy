import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TerminalWindow = ({ title = 'terminal.txt', lines = [] }) => {
  return (
    <div className="bg-gray-900 text-green-300 font-mono rounded-lg shadow-lg border border-gray-700 overflow-hidden">
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <span className="text-white text-sm">{title}</span>
        <div></div>
      </div>

      <div className="p-6 whitespace-pre-wrap text-sm">
        <span className="text-white">
          <Typewriter
            words={[lines[0]]}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </span>
        {"\n"}
        <div dangerouslySetInnerHTML={{ __html: lines.slice(1).join('<br/>') }} />

      </div>
    </div>
  );
};

export default TerminalWindow;
