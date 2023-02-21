import { GITHUB_NINA, GITHUB_SERGEY, GITHUB_VLADIMIR } from "../../../../constants/constants";
import avatar from "../../../../assets/images/Avatar/none_avatar.svg";

export interface MembersInterface {
  id: number;
  photo: string;
  name: string;
  role: string;
  description: string;
  github: string;
}

export const MEMBERS: Array<MembersInterface> = [
  {
    id: 1,
    photo: avatar,
    name: "team.nameFirst",
    role: "team.roleFirst",
    description: "team.descriptionFirst",
    github: GITHUB_VLADIMIR,
  },
  {
    id: 2,
    photo: avatar,
    name: "team.nameSecond",
    role: "team.roleSecond",
    description: "team.descriptionSecond",
    github: GITHUB_NINA,
  },
  {
    id: 3,
    photo: avatar,
    name: "team.nameThird",
    role: "team.roleThird",
    description: "team.descriptionThird",
    github: GITHUB_SERGEY,
  },
];
