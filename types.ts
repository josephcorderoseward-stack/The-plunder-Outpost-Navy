
export enum ShipType {
  SLOOP = 'Sloop',
  BRIGANTINE = 'Brigantine',
  GALLEON = 'Galleon'
}

export interface Ship {
  id: string;
  name: string;
  type: ShipType;
  captain: string;
  voyagesCompleted: number;
  goldEarned: number;
  description: string;
  image: string;
}

export interface CrewMember {
  id: string;
  gamertag: string;
  role: 'Captain' | 'Quartermaster' | 'Boatswain' | 'Sailor';
  favoriteActivity: string;
  notableAchievement: string;
  avatar: string;
}

export interface GuildStats {
  level: number;
  totalGold: number;
  totalVoyages: number;
  reputation: Record<string, number>;
}
