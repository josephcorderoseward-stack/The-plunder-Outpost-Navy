
import React from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'overview', label: 'Navy Command' },
    { id: 'fleet', label: 'The Fleet' },
    { id: 'crew', label: 'Hierarchy' },
    { id: 'lore', label: 'Dispatches' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-amber-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center border-2 border-amber-400 shadow-[0_0_15px_rgba(30,58,138,0.5)] transform rotate-3">
               <span className="text-2xl">🏛️</span>
            </div>
            <span className="font-pirate text-3xl text-amber-500 tracking-wider">Plunder Outpost Navy</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`font-cinzel text-sm uppercase tracking-widest transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-amber-400 border-b-2 border-amber-400 pb-1' 
                    : 'text-slate-400 hover:text-amber-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
