
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ShipCard from './components/ShipCard';
import { MOCK_GUILD_STATS, MOCK_SHIPS, MOCK_CREW } from './constants';
import { generatePirateLore, generateVoyageSummary } from './services/geminiService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [loreSubject, setLoreSubject] = useState('');
  const [generatedLore, setGeneratedLore] = useState('');
  const [isLoreLoading, setIsLoreLoading] = useState(false);
  const [logKeywords, setLogKeywords] = useState('');
  const [generatedLog, setGeneratedLog] = useState('');

  const reputationData = Object.entries(MOCK_GUILD_STATS.reputation).map(([name, value]) => ({
    name,
    value,
  }));

  const handleGenerateLore = async () => {
    if (!loreSubject) return;
    setIsLoreLoading(true);
    const result = await generatePirateLore(loreSubject, 'ship');
    setGeneratedLore(result || '');
    setIsLoreLoading(false);
  };

  const handleGenerateLog = async () => {
    if (!logKeywords) return;
    const keywords = logKeywords.split(',').map(k => k.trim());
    const result = await generateVoyageSummary(keywords);
    setGeneratedLog(result || '');
  };

  // Helper to map roles to specific Navy ranks
  const getRank = (gamertag: string) => {
    if (gamertag === 'BackShotKing347') return 'Admiral';
    if (gamertag === 'Matbitbol') return 'Vice-Admiral';
    if (gamertag === 'Rambo' || gamertag === 'Nelson') return 'Commodore';
    return 'Sailor';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {activeSection === 'overview' && (
          <div className="space-y-12">
            <header className="text-center space-y-4">
              <h1 className="text-6xl font-pirate text-amber-500 drop-shadow-lg tracking-wide">The Plunder Outpost Navy</h1>
              <div className="flex flex-col items-center gap-2">
                <p className="text-xl font-cinzel text-slate-400 tracking-widest uppercase">Guild Level {MOCK_GUILD_STATS.level} • Sea of Thieves</p>
                <p className="text-amber-600/80 font-cinzel text-xs tracking-[0.2em] uppercase italic">Lords of Plunder Outpost & Plunder Valley</p>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900/50 p-8 border border-amber-900/20 rounded-xl text-center">
                <span className="text-4xl block mb-2">💰</span>
                <h3 className="text-slate-400 font-cinzel text-xs uppercase tracking-widest">Navy Treasury</h3>
                <p className="text-3xl font-body text-amber-500 mt-1">{MOCK_GUILD_STATS.totalGold.toLocaleString()} Gold</p>
              </div>
              <div className="bg-slate-900/50 p-8 border border-amber-900/20 rounded-xl text-center">
                <span className="text-4xl block mb-2">🚢</span>
                <h3 className="text-slate-400 font-cinzel text-xs uppercase tracking-widest">Active Fleet</h3>
                <p className="text-3xl font-body text-amber-500 mt-1">{MOCK_SHIPS.length} Ships</p>
              </div>
              <div className="bg-slate-900/50 p-8 border border-amber-900/20 rounded-xl text-center">
                <span className="text-4xl block mb-2">⚔️</span>
                <h3 className="text-slate-400 font-cinzel text-xs uppercase tracking-widest">Operations</h3>
                <p className="text-3xl font-body text-amber-500 mt-1">{MOCK_GUILD_STATS.totalVoyages} Completed</p>
              </div>
            </div>

            <section className="bg-slate-900/30 p-8 border border-amber-900/10 rounded-2xl">
              <h2 className="font-pirate text-3xl text-amber-400 mb-8 text-center uppercase tracking-widest">Fleet Allegiance</h2>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={reputationData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" stroke="#94a3b8" width={140} fontSize={12} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #78350f', color: '#f59e0b' }}
                      itemStyle={{ color: '#fbbf24' }}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {reputationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#b45309' : '#1e3a8a'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'fleet' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-5xl font-pirate text-amber-500 mb-2">Naval Assets</h2>
              <p className="font-cinzel text-slate-500 uppercase tracking-widest text-sm">Deployment across Plunder Valley and beyond</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_SHIPS.map(ship => (
                <ShipCard key={ship.id} ship={ship} />
              ))}
            </div>
          </div>
        )}

        {activeSection === 'crew' && (
          <div className="space-y-12">
             <div className="text-center">
              <h2 className="text-5xl font-pirate text-amber-500 mb-2">Command Hierarchy</h2>
              <p className="font-cinzel text-slate-500 uppercase tracking-widest text-sm">The Plunder Outpost High Command</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MOCK_CREW.map(pirate => {
                const rank = getRank(pirate.gamertag);
                const isAdmiral = rank === 'Admiral';
                return (
                  <div key={pirate.id} className={`bg-slate-900 border ${isAdmiral ? 'border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : 'border-amber-900/20'} rounded-xl p-6 text-center group hover:border-amber-500 transition-all duration-300`}>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-amber-700 p-1 bg-amber-900/20">
                      <img src={pirate.avatar} alt={pirate.gamertag} className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h3 className="font-pirate text-2xl text-amber-500">{pirate.gamertag}</h3>
                    <div className={`inline-block px-3 py-1 rounded text-[10px] font-cinzel font-bold uppercase tracking-wider mb-3 ${isAdmiral ? 'bg-amber-600 text-white' : 'bg-slate-800 text-amber-400'}`}>
                      {rank}
                    </div>
                    <div className="text-left space-y-2 mt-4 border-t border-amber-900/10 pt-4">
                      <p className="text-[10px] uppercase text-slate-500 tracking-wider">Duties</p>
                      <p className="text-sm text-slate-300 italic">{pirate.favoriteActivity}</p>
                      <p className="text-[10px] uppercase text-slate-500 tracking-wider">Distinction</p>
                      <p className="text-sm text-amber-200/80">{pirate.notableAchievement}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeSection === 'lore' && (
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-5xl font-pirate text-amber-500 mb-2">Naval Dispatches</h2>
              <p className="font-cinzel text-slate-500 uppercase tracking-widest text-sm">Archiving the Navy's Conquests</p>
            </div>

            <div className="bg-slate-900/80 border border-amber-900/40 p-8 rounded-2xl space-y-8 shadow-2xl relative">
              <div className="space-y-4">
                <label className="block font-cinzel text-amber-400 text-xs uppercase tracking-widest">Lore Generator (Admiral's Library)</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={loreSubject}
                    onChange={(e) => setLoreSubject(e.target.value)}
                    placeholder="e.g. The Battle of Plunder Valley..."
                    className="flex-1 bg-slate-950 border border-amber-900/50 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                  <button 
                    onClick={handleGenerateLore}
                    disabled={isLoreLoading}
                    className="bg-amber-700 hover:bg-amber-600 disabled:bg-slate-700 text-amber-100 font-cinzel px-6 py-3 rounded transition-colors uppercase tracking-widest text-sm"
                  >
                    {isLoreLoading ? 'Summoning...' : 'Write Lore'}
                  </button>
                </div>
              </div>

              {generatedLore && (
                <div className="bg-amber-900/10 border-l-4 border-amber-600 p-6 italic text-amber-100/90 leading-relaxed font-body text-lg animate-fade-in">
                  "{generatedLore}"
                </div>
              )}

              <hr className="border-amber-900/20" />

              <div className="space-y-4">
                <label className="block font-cinzel text-amber-400 text-xs uppercase tracking-widest">Command Log generator</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={logKeywords}
                    onChange={(e) => setLogKeywords(e.target.value)}
                    placeholder="Keywords: Plunder Outpost, Merchant, Sinking, Victory..."
                    className="flex-1 bg-slate-950 border border-amber-900/50 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                  <button 
                    onClick={handleGenerateLog}
                    className="bg-amber-900 hover:bg-amber-800 text-amber-100 font-cinzel px-6 py-3 rounded transition-colors uppercase tracking-widest text-sm"
                  >
                    Log Entry
                  </button>
                </div>
              </div>

              {generatedLog && (
                <div className="bg-slate-950 border border-amber-900/30 p-6 font-body text-slate-400 leading-relaxed whitespace-pre-wrap">
                  {generatedLog}
                </div>
              )}

              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]"></div>
            </div>
          </div>
        )}

      </main>

      <footer className="border-t border-amber-900/20 py-12 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <p className="font-pirate text-2xl text-amber-700 tracking-widest">FOR THE NAVY, FOR PLUNDER OUTPOST.</p>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-cinzel">The Plunder Outpost Navy • Sea of Thieves Fan Portal</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
