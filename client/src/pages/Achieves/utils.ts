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
        if (countMemoryAttemts(stats) >= 10) {
          return true;
        }
        return false;

      case AchievesId.FLASH:
        if (countMemoryAttemts(stats) >= 30) {
          return true;
        }
        return false;

      case AchievesId.MNEMONIST:
        if (countMemoryAttemts(stats) >= 50) {
          return true;
        }
        return false;

      case AchievesId.FLOW:
        if (countConcentrationAttemts(stats) >= 10) {
          return true;
        }
        return false;

      case AchievesId.RESOURCE:
        if (countConcentrationAttemts(stats) >= 30) {
          return true;
        }
        return false;

      case AchievesId.MOMENT:
        if (countConcentrationAttemts(stats) >= 50) {
          return true;
        }
        return false;

      case AchievesId.BATMAN:
        if (countLogicsAttemts(stats) >= 10) {
          return true;
        }
        return false;

      case AchievesId.INTELLECTUAL:
        if (countLogicsAttemts(stats) >= 30) {
          return true;
        }
        return false;

      case AchievesId.THINKER:
        if (countLogicsAttemts(stats) >= 50) {
          return true;
        }
        return false;

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
  if (
    categories.includes(GameCategories.CONCENTRATION) &&
    categories.includes(GameCategories.MEMORY) &&
    categories.includes(GameCategories.LOGICS)
  ) {
    return true;
  }
  return false;
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

function countMemoryAttemts(statistics: GameAttempt[]) {
  const memory = statistics.filter((item) => item.category === GameCategories.MEMORY);
  return memory.length;
}

function countLogicsAttemts(statistics: GameAttempt[]) {
  const logics = statistics.filter((item) => item.category === GameCategories.LOGICS);
  return logics.length;
}

function countConcentrationAttemts(statistics: GameAttempt[]) {
  const concentration = statistics.filter((item) => item.category === GameCategories.CONCENTRATION);
  return concentration.length;
}

function countDaysInARow(statistics: GameAttempt[]) {
  const dates = statistics.map((item) => item.date);
  let maxDaysInARow = 1;
  dates.reduce((prevDate, nextDate) => {
    const date1 = new Date(prevDate);
    const date2 = new Date(nextDate);
    if (Math.abs(date2.getDate() - date1.getDate()) === 1) {
      maxDaysInARow += 1;
    }
    if (date1.getDate() === 6) {
      if (date2.getDate() === 0) {
        maxDaysInARow += 1;
      }
    }
    if (Math.abs(date1.getDate() - date2.getDate()) > 1) {
      maxDaysInARow = 1;
    }
    return nextDate;
  });
  return maxDaysInARow;
}
