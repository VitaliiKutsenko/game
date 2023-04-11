export const reduceBattleLog = (character, opponent, target) => {
  const battleLog = {
    enemy: {
      damage: [],
      block: [],
    },
    user: {
      damage: [],
      block: [],
    },
  };

  character.reduce((acc, item) => {
    if (opponent.some(def => item.title === def.title)) {
      acc[target].block.push(item.title.toLowerCase());
    } else {
      acc[target].damage.push(item.title.toLowerCase());
    }

    return acc;
  }, battleLog);

  return { [target]: battleLog[target] };
};
