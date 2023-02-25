export enum AchievesId {
  FRIENDS = 1,
  DISCOVERER,
  EXPLORER,
  SHELDON,
  FLASH,
  MNEMONIST,
  FLOW,
  RESOURCE,
  MOMENT,
  BATMAN,
  INTELLECTUAL,
  THINKER,
  WEEK,
  HABIT,
}

export interface AchieveInterface {
  id: AchievesId;
  name: string;
  description: string;
  isOpen: boolean;
  image: string;
}
