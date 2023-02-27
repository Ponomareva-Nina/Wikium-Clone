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
        return countAttemtsOnCategory(stats, GameCategories.MEMORY) >= 10;

      case AchievesId.FLASH:
        return countAttemtsOnCategory(stats, GameCategories.MEMORY) >= 30;

      case AchievesId.MNEMONIST:
        return countAttemtsOnCategory(stats, GameCategories.MEMORY) >= 50;

      case AchievesId.FLOW:
        return countAttemtsOnCategory(stats, GameCategories.CONCENTRATION) >= 10;

      case AchievesId.RESOURCE:
        return countAttemtsOnCategory(stats, GameCategories.CONCENTRATION) >= 30;

      case AchievesId.MOMENT:
        return countAttemtsOnCategory(stats, GameCategories.CONCENTRATION) >= 50;

      case AchievesId.BATMAN:
        return countAttemtsOnCategory(stats, GameCategories.LOGICS) >= 10;

      case AchievesId.INTELLECTUAL:
        return countAttemtsOnCategory(stats, GameCategories.LOGICS) >= 30;

      case AchievesId.THINKER:
        return countAttemtsOnCategory(stats, GameCategories.LOGICS) >= 50;

      case AchievesId.WEEK:
        if (countDaysInARow(stats) >= 7) {
          return true;
        }
        return false;

      case AchievesId.HABIT:
        if (countDaysInARow(stats) >= 21) {
          return true;
        }
        return false;

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
  if (memory >= 5 && concentration >= 5 && logics >= 5) {
    return true;
  }
  return false;
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
