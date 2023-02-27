import helloImg from "../../assets/images/Achieves/friends.svg";
import discovererImg from "../../assets/images/Achieves/discoverer.svg";
import explorerImg from "../../assets/images/Achieves/explorer.svg";
import bazingaImg from "../../assets/images/Achieves/bazinga.svg";
import flowImg from "../../assets/images/Achieves/flow.svg";
import resourceImg from "../../assets/images/Achieves/resource.svg";
import momentImg from "../../assets/images/Achieves/moment.svg";
import flashImg from "../../assets/images/Achieves/flash.svg";
import intellectImg from "../../assets/images/Achieves/intellect.svg";
import mnemonistImg from "../../assets/images/Achieves/mnemonist.svg";
import batmanImg from "../../assets/images/Achieves/batman.svg";
import thinkerImg from "../../assets/images/Achieves/thinker.svg";
import weekChallengeImg from "../../assets/images/Achieves/week.svg";
import monthChallengeImg from "../../assets/images/Achieves/habit.svg";

import { AchieveInterface, AchievesId } from "./types";

export const achieves: AchieveInterface[] = [
  {
    id: AchievesId.FRIENDS,
    name: "achieves.friends",
    description: "achieves.friendsInfo",
    image: helloImg,
  },
  {
    id: AchievesId.DISCOVERER,
    name: "achieves.discoverer",
    description: "achieves.discovererInfo",
    image: discovererImg,
  },
  {
    id: AchievesId.EXPLORER,
    name: "achieves.explorer",
    description: "achieves.explorerInfo",
    image: explorerImg,
  },
  {
    id: AchievesId.SHELDON,
    name: "achieves.sheldonCooper",
    description: "achieves.sheldonCooperInfo",
    image: bazingaImg,
  },
  {
    id: AchievesId.FLASH,
    name: "achieves.flashDrive",
    description: "achieves.flashDriveInfo",
    image: flashImg,
  },
  {
    id: AchievesId.MNEMONIST,
    name: "achieves.mnemonist",
    description: "achieves.mnemonistInfo",
    image: mnemonistImg,
  },
  {
    id: AchievesId.FLOW,
    name: "achieves.onTheFlow",
    description: "achieves.onTheFlowInfo",
    image: flowImg,
  },
  {
    id: AchievesId.RESOURCE,
    name: "achieves.inResource",
    description: "achieves.inResourceInfo",
    image: resourceImg,
  },
  {
    id: AchievesId.MOMENT,
    name: "achieves.inMoment",
    description: "achieves.inMomentInfo",
    image: momentImg,
  },
  {
    id: AchievesId.BATMAN,
    name: "achieves.batman",
    description: "achieves.batmanInfo",
    image: batmanImg,
  },
  {
    id: AchievesId.INTELLECTUAL,
    name: "achieves.intellectual",
    description: "achieves.intellectualInfo",
    image: intellectImg,
  },
  {
    id: AchievesId.THINKER,
    name: "achieves.thinker",
    description: "achieves.thinkerInfo",
    image: thinkerImg,
  },
  {
    id: AchievesId.WEEK,
    name: "achieves.weekChallenge",
    description: "achieves.weekChallengeInfo",
    image: weekChallengeImg,
  },
  {
    id: AchievesId.HABIT,
    name: "achieves.matterOfHabit",
    description: "achieves.matterOfHabitInfo",
    image: monthChallengeImg,
  },
];
