import { GITHUB_NINA, GITHUB_SERGEY, GITHUB_VLADIMIR } from "../../../../constants/constants";
import avatar from "../../../../assets/images/Avatar/none_avatar.svg";
import kimono from "../../../../assets/images/Team/kimono.svg";
import moon from "../../../../assets/images/Team/moon.svg";
import swords from "../../../../assets/images/Team/swords.svg";

export interface MembersInterface {
  id: number;
  photo: string;
  name: string;
  role: string;
  roleIcon: string;
  roleDescription: string;
  description: string;
  githubLink: string;
  githubName: string;
}

export const MEMBERS: Array<MembersInterface> = [
  {
    id: 1,
    photo: avatar,
    name: "team.nameFirst",
    role: "team.roleFirst",
    roleIcon: swords,
    roleDescription: "team.roleFirstDescription",
    description: "team.descriptionFirst",
    githubLink: GITHUB_VLADIMIR,
    githubName: "vladimirm89",
  },
  {
    id: 2,
    photo: avatar,
    name: "team.nameSecond",
    role: "team.roleSecond",
    roleIcon: moon,
    roleDescription: "team.roleSecondDescription",
    description: "team.descriptionSecond",
    githubLink: GITHUB_NINA,
    githubName: "Ponomareva-Nina",
  },
  {
    id: 3,
    photo: avatar,
    name: "team.nameThird",
    role: "team.roleThird",
    roleIcon: kimono,
    roleDescription: "team.roleThirdDescription",
    description: "team.descriptionThird",
    githubLink: GITHUB_SERGEY,
    githubName: "reznichenkosa",
  },
];
