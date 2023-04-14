export const updatePointInStates = (payload, state, addType) => {
  const { type } = payload;
  const { chosenSkill } = state;
  const updatePoint = () => {
    return state[chosenSkill]['skills'].map(skill => {
      if (type === skill.type) {
        switch (addType) {
          case 'add':
            skill.skillPoint++;
            break;

          case 'remove':
            if (skill.skillPoint > 0) {
              skill.skillPoint--;
            }

            break;
        }
      }

      return skill;
    });
  };

  if (chosenSkill) {
    return { [chosenSkill]: { skills: updatePoint() } };
  }
};
