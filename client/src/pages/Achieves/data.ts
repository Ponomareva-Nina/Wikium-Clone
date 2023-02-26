import helloImg from "../../assets/images/Achieves/friends.png";
import discovererImg from "../../assets/images/Achieves/discoverer.png";
import explorerImg from "../../assets/images/Achieves/explorer.png";
import bazingaImg from "../../assets/images/Achieves/sheldon.png";
import flowImg from "../../assets/images/Achieves/flow.png";
import resourceImg from "../../assets/images/Achieves/resource.png";
import momentImg from "../../assets/images/Achieves/moment.png";
import flashImg from "../../assets/images/Achieves/flash.png";
import intellectImg from "../../assets/images/Achieves/intellect.png";
import mnemonistImg from "../../assets/images/Achieves/mnemonist.png";
import batmanImg from "../../assets/images/Achieves/batman.png";
import thinkerImg from "../../assets/images/Achieves/thinker.png";
import weekChallengeImg from "../../assets/images/Achieves/week-challenge.png";
import monthChallengeImg from "../../assets/images/Achieves/routine.png";

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
