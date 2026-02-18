
import React from 'react';
import { Ship, ShipType, CrewMember, GuildStats } from './types';

export const MOCK_GUILD_STATS: GuildStats = {
  level: 10,
  totalGold: 8400000,
  totalVoyages: 156,
  reputation: {
    'Merchant Alliance': 80,
    'Reaper\'s Bones': 95,
    'Gold Hoarders': 45,
    'Order of Souls': 30,
    'Athena\'s Fortune': 15
  }
};

export const MOCK_SHIPS: Ship[] = [
  {
    id: 's1',
    name: 'The Golden Merchant',
    type: ShipType.GALLEON,
    captain: 'BackShotKing347',
    voyagesCompleted: 78,
    goldEarned: 3200000,
    description: 'A massive blue and gold vessel dedicated to the Merchant Alliance. The pride of the Navy.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's2',
    name: 'The Golden Raider',
    type: ShipType.BRIGANTINE,
    captain: 'Rambo',
    voyagesCompleted: 42,
    goldEarned: 1800000,
    description: 'Adorned in the royal purple of the Season 18 Plunder Pass. Fast and striking.',
    image: 'https://images.unsplash.com/photo-1569428034239-f9565e32e224?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's3',
    name: 'The Flame Raider',
    type: ShipType.GALLEON,
    captain: 'Matbitbol',
    voyagesCompleted: 55,
    goldEarned: 2100000,
    description: 'A Reaper-skinned terror that hunts the Burning Blade. Commanded by the Vice-Admiral.',
    image: 'https://images.unsplash.com/photo-1500091523976-5fcd2496929e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's4',
    name: 'HMS Victory',
    type: ShipType.GALLEON,
    captain: 'Nelson',
    voyagesCompleted: 31,
    goldEarned: 950000,
    description: 'A symbol of naval dominance and discipline across the Ancient Isles.',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's5',
    name: 'The Olivia',
    type: ShipType.SLOOP,
    captain: 'Navy Cadets',
    voyagesCompleted: 110,
    goldEarned: 600000,
    description: 'A Reaper-skinned sloop used for swift scouting and tactical harassment.',
    image: 'https://images.unsplash.com/photo-1532155053000-880092f66359?q=80&w=800&auto=format&fit=crop'
  }
];

export const MOCK_CREW: CrewMember[] = [
  {
    id: 'c1',
    gamertag: 'BackShotKing347',
    role: 'Captain', // We'll map this to 'Admiral' in UI
    favoriteActivity: 'Commanding the Merchant Fleet',
    notableAchievement: 'Founder of the Plunder Outpost Navy',
    avatar: 'https://picsum.photos/seed/admiral/150/150'
  },
  {
    id: 'c2',
    gamertag: 'Matbitbol',
    role: 'Quartermaster', // We'll map this to 'Vice-Admiral' in UI
    favoriteActivity: 'Reaper World Events',
    notableAchievement: 'Champion of the Flame',
    avatar: 'https://picsum.photos/seed/vice/150/150'
  },
  {
    id: 'c3',
    gamertag: 'Rambo',
    role: 'Boatswain', // We'll map this to 'Commodore' in UI
    favoriteActivity: 'Fast Ship Interception',
    notableAchievement: 'The Purple Scourge',
    avatar: 'https://picsum.photos/seed/commodore1/150/150'
  },
  {
    id: 'c4',
    gamertag: 'Nelson',
    role: 'Boatswain', // We'll map this to 'Commodore' in UI
    favoriteActivity: 'Naval Tactics',
    notableAchievement: 'Hero of the HMS Victory',
    avatar: 'https://picsum.photos/seed/commodore2/150/150'
  }
];

export const Icons = {
  Compass: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.488V5.512a2 2 0 011.553-1.954L9 1m0 19l6-2m-6 2V1M9 1l6 2m0 0l5.447 2.724A2 2 0 0121 7.676v9.963a2 2 0 01-1.553 1.954L15 21m0-18v18" />
    </svg>
  ),
  Anchor: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11V3m0 0L9 6m3-3l3 3m-3 15a6 6 0 01-6-6v-1m12 0v1a6 6 0 01-6 6z" />
    </svg>
  ),
  Skull: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  )
};
