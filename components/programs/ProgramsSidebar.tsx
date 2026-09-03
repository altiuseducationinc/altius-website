'use client';

import { useState } from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  programsList: { id: string; title: string }[];
}

export default function ProgramsSidebar({ activeTab, setActiveTab, programsList }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentProgramTitle = programsList.find(p => p.id === activeTab)?.title || 'Select Program';

  return (
    <div id="programs-sidebar" className="lg:col-span-4 bg-white p-4 border border-gray-200/80 shadow-md space-y-1.5 lg:sticky lg:top-28 rounded-[10px]">
      
      {/* Mobile Collapsible Header */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:hidden flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-[8px] shadow-sm"
      >
        <div className="flex items-center gap-2.5 truncate">
          <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <span className="truncate">Menu: {currentProgramTitle}</span>
        </div>
        <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Desktop Heading */}
      <h3 className="hidden lg:flex font-serif font-bold text-xs uppercase tracking-wider text-altiusNavy px-3 py-2 border-b border-gray-100 mb-2 items-center gap-2.5">
        <svg className="w-4 h-4 text-altiusGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        Program Menu
      </h3>

      {/* Programs List */}
      <div className={`space-y-2 pt-2 lg:pt-0 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        {programsList.map((prog) => {
          const isActive = activeTab === prog.id;
          return (
            <button
              key={prog.id}
              onClick={() => {
                setActiveTab(prog.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-between rounded-[8px] ${
                isActive 
                  ? 'bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 text-altiusGold shadow-md scale-[1.01]' 
                  : 'text-gray-600 hover:bg-altiusLight hover:text-altiusNavy'
              }`}
            >
              <span className="truncate">{prog.title}</span>
              <svg className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-altiusGold translate-x-1' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          );
        })}
      </div>

    </div>
  );
}