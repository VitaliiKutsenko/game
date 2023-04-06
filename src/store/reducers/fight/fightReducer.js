import {
  SET_ATTACK,
  SET_DEFENCE,
  RM_DEFENCE,
  RM_ATTACK,
  SET_FIGHT_ACTIONS,
} from './fightActionsType';

const initialState = {
  attack: [],
  defence: [],
};

export const fight = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ATTACK:
      return {
        ...state,
        attack: [...state.attack, payload],
      };

    case RM_ATTACK:
      return {
        ...state,
        attack: [...state.attack.filter(item => item.title !== payload.title)],
      };

    case SET_DEFENCE:
      return {
        ...state,
        defence: [...state.defence, payload],
      };

    case RM_DEFENCE:
      return {
        ...state,
        defence: [...state.defence.filter(item => item.title !== payload.title)],
      };

    default:
      return state;
  }
};
