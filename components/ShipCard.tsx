
import React from 'react';
import { Ship } from '../types';

interface ShipCardProps {
  ship: Ship;
}

const ShipCard: React.FC<ShipCardProps> = ({ ship }) => {
  return (
    <div className="relative group bg-slate-900 border border-amber-900/30 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(146,64,14,0.2)] hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img 
          src={ship.image} 
          alt={ship.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-amber-800/90 text-amber-100 text-xs font-cinzel rounded border border-amber-600">
          {ship.type}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-pirate text-2xl text-amber-500 mb-1">{ship.name}</h3>
        <p className="text-xs text-slate-500 font-cinzel mb-4 tracking-tighter uppercase">Captain {ship.captain}</p>
        
        <p className="text-slate-300 text-sm mb-6 italic leading-relaxed">
          "{ship.description}"
        </p>
        
        <div className="grid grid-cols-2 gap-4 border-t border-amber-900/20 pt-4">
          <div>
            <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-cinzel">Gold Earned</span>
            <span className="text-amber-400 font-body">💰 {ship.goldEarned.toLocaleString()}</span>
          </div>
          <div>
            <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-cinzel">Voyages</span>
            <span className="text-amber-400 font-body">🗺️ {ship.voyagesCompleted}</span>
          </div>
        </div>
      </div>
      
      {/* Golden accent corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-600/50 rounded-tl-lg pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-600/50 rounded-br-lg pointer-events-none"></div>
    </div>
  );
};

export default ShipCard;
