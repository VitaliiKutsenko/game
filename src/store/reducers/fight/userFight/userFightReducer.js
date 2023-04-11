import {
  SET_ATTACK,
  SET_DEFENCE,
  RM_DEFENCE,
  RM_ATTACK,
  SET_USER_READY,
  CLEAR_USER_FIGHT_STATE,
} from './userFightActions';

const initialState = {
  attack: [],
  defence: [],
  ready: false,
};

export const userFight = (state = initialState, { type, payload }) => {
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

    case CLEAR_USER_FIGHT_STATE:
      return {
        ...state,
        ...initialState,
      };

    case SET_USER_READY:
      return {
        ...state,
        ready: payload,
      };

    default:
      return state;
  }
};
