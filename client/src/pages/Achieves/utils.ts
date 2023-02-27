import {
  GAMES_TO_FIRST_ACHIEVE,
  GAMES_TO_SECOND_ACHIEVE,
  GAMES_TO_THIRD_ACHIEVE,
  HABIT_CHALLENGE_PERIOD,
  WEEK_PERIOD,
} from "../../constants/constants";
import { GameCategories } from "../../interfaces/Categories";
import { GameAttempt, User } from "../../interfaces/User";
import { AchievesId } from "./types";

export const checkIsAchieveOpen = (user: User | null, achieveId: AchievesId) => {
  if (user) {
    const stats = user.statistics;

    switch (achieveId) {
      case AchievesId.FRIENDS:
        return checkFriendAchieve(user);

      case AchievesId.DISCOVERER:
        return checkDiscovererAchieve(stats);

      case AchievesId.EXPLORER:
        return checkExplorerAchieve(stats);

      case AchievesId.SHELDON:
        return countAttemtsOnCategory(stats, GameCategories.MEMORY) >= GAMES_TO_FIRST_ACHIEVE;

      case AchievesId.FLASH:
        return countAttemtsOnCategory(stats, GameCategories.MEMORY) >= GAMES_TO_SECOND_ACHIEVE;

      case AchievesId.MNEMONIST:
        return countAttemtsOnCategory(stats, GameCategories.MEMORY) >= GAMES_TO_THIRD_ACHIEVE;

      case AchievesId.FLOW:
        return (
          countAttemtsOnCategory(stats, GameCategories.CONCENTRATION) >= GAMES_TO_FIRST_ACHIEVE
        );

      case AchievesId.RESOURCE:
        return (
          countAttemtsOnCategory(stats, GameCategories.CONCENTRATION) >= GAMES_TO_SECOND_ACHIEVE
        );

      case AchievesId.MOMENT:
        return (
          countAttemtsOnCategory(stats, GameCategories.CONCENTRATION) >= GAMES_TO_THIRD_ACHIEVE
        );

      case AchievesId.BATMAN:
        return countAttemtsOnCategory(stats, GameCategories.LOGICS) >= GAMES_TO_FIRST_ACHIEVE;

      case AchievesId.INTELLECTUAL:
        return countAttemtsOnCategory(stats, GameCategories.LOGICS) >= GAMES_TO_SECOND_ACHIEVE;

      case AchievesId.THINKER:
        return countAttemtsOnCategory(stats, GameCategories.LOGICS) >= GAMES_TO_THIRD_ACHIEVE;

      case AchievesId.WEEK:
        return countDaysInARow(stats) >= WEEK_PERIOD;

      case AchievesId.HABIT:
        return countDaysInARow(stats) >= HABIT_CHALLENGE_PERIOD;

      default:
        return false;
    }
  } else {
    return false;
  }
};

function checkFriendAchieve(user: User) {
  if (user.name && user.surname && user.gender && user.birthDay && user.education) {
    return true;
  }
  return false;
}

function checkDiscovererAchieve(statistics: GameAttempt[]) {
  const categories = statistics.map((item) => item.category);
  return (
    categories.includes(GameCategories.CONCENTRATION) &&
    categories.includes(GameCategories.MEMORY) &&
    categories.includes(GameCategories.LOGICS)
  );
}

function checkExplorerAchieve(statistics: GameAttempt[]) {
  let memory = 0;
  let logics = 0;
  let concentration = 0;
  statistics.forEach((item) => {
    if (item.category === GameCategories.CONCENTRATION) {
      concentration += 1;
    }
    if (item.category === GameCategories.LOGICS) {
      logics += 1;
    }
    if (item.category === GameCategories.MEMORY) {
      memory += 1;
    }
  });

  return memory >= 5 && concentration >= 5 && logics >= 5;
}

function countAttemtsOnCategory(statistics: GameAttempt[], category: GameCategories) {
  const attemptsNumber = statistics.filter((item) => item.category === category);
  return attemptsNumber.length;
}

function countDaysInARow(statistics: GameAttempt[]) {
  const dates = statistics.map((item) => item.date);
  let maxDaysInARow = 1;
  dates.reduce((prevDate, nextDate) => {
    if (
      getDateDifference(prevDate, nextDate) === 1 ||
      (isSaturday(prevDate) && isSunday(nextDate))
    ) {
      maxDaysInARow += 1;
    }

    if (getDateDifference(prevDate, nextDate) > 1) {
      maxDaysInARow = 1;
    }
    return nextDate;
  });
  return maxDaysInARow;
}

function getDateDifference(prevDate: string, nextDate: string): number {
  const date1 = new Date(prevDate);
  const date2 = new Date(nextDate);
  return Math.abs(date2.getDate() - date1.getDate());
}

function isSaturday(date: string): boolean {
  const dayOfWeek = new Date(date);
  return dayOfWeek.getDate() === 6;
}

function isSunday(date: string): boolean {
  const dayOfWeek = new Date(date);
  return dayOfWeek.getDate() === 0;
}
