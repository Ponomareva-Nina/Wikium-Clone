import helloImg from "../../assets/images/Achieves/friends.png";
import discovererImg from "../../assets/images/Achieves/discoverer.png";
import explorerImg from "../../assets/images/Achieves/explorer.png";
import { AchieveInterface, AchievesId } from "./types";

export const achieves: AchieveInterface[] = [
  {
    id: AchievesId.FRIENDS,
    name: "achieves.friends",
    description: "achieves.friendsInfo",
    isOpen: true,
    image: helloImg,
  },
  {
    id: AchievesId.DISCOVERER,
    name: "achieves.discoverer",
    description: "achieves.discovererInfo",
    isOpen: true,
    image: discovererImg,
  },
  {
    id: AchievesId.EXPLORER,
    name: "achieves.explorer",
    description: "achieves.explorerInfo",
    isOpen: true,
    image: explorerImg,
  },
  {
    id: AchievesId.SHELDON,
    name: "achieves.sheldonCooper",
    description: "achieves.sheldonCooperInfo",
    isOpen: false,
    image: "",
  },
  {
    id: AchievesId.FLASH,
    name: "achieves.flashDrive",
    description: "achieves.flashDriveInfo",
    isOpen: false,
    image: "",
  },
  {
    id: AchievesId.MNEMONIST,
    name: "achieves.mnemonist",
    description: "achieves.mnemonistInfo",
    isOpen: false,
    image: "",
  },
  {
    id: AchievesId.FLOW,
    name: "achieves.onTheFlow",
    description: "achieves.onTheFlowInfo",
    isOpen: false,
    image: "",
  },
  {
    id: AchievesId.RESOURCE,
    name: "achieves.inResource",
    description: "achieves.inResourceInfo",
    isOpen: false,
    image: "",
  },
  {
    id: AchievesId.MOMENT,
    name: "achieves.inMoment",
    description: "achieves.inMomentInfo",
    isOpen: false,
    image: "",
  },
  {
    id: AchievesId.BATMAN,
    name: "achieves.batman",
    description: "achieves.batmanInfo",
    isOpen: false,
    image: "",
  },
  {
    id: AchievesId.INTELLECTUAL,
    name: "achieves.intellectual",
    description: "achieves.intellectualInfo",
    isOpen: false,
    image: "",
  },
  {
    id: AchievesId.THINKER,
    name: "achieves.thinker",
    description: "achieves.thinkerInfo",
    isOpen: false,
    image: "",
  },
  {
    id: AchievesId.WEEK,
    name: "achieves.weekChallenge",
    description: "achieves.weekChallengeInfo",
    isOpen: false,
    image: "",
  },
  {
    id: AchievesId.HABIT,
    name: "achieves.matterOfHabit",
    description: "achieves.matterOfHabitInfo",
    isOpen: false,
    image: "",
  },
];
