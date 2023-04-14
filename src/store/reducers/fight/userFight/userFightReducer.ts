import { UserFightActionTypes } from '@src/store/reducers/fight/userFight/userFightActionTypes';

const initialState = {
  attack: [],
  defence: [],
  ready: false,
};

export const userFight = (state = initialState, { type, payload }) => {
  switch (type) {
    case UserFightActionTypes.SET_ATTACK:
      return {
        ...state,
        attack: [...state.attack, payload],
      };

    case UserFightActionTypes.RM_ATTACK:
      return {
        ...state,
        attack: [...state.attack.filter(item => item.title !== payload.title)],
      };

    case UserFightActionTypes.SET_DEFENCE:
      return {
        ...state,
        defence: [...state.defence, payload],
      };

    case UserFightActionTypes.RM_DEFENCE:
      return {
        ...state,
        defence: [...state.defence.filter(item => item.title !== payload.title)],
      };

    case UserFightActionTypes.CLEAR_USER_FIGHT_STATE:
      return {
        ...state,
        ...initialState,
      };

    case UserFightActionTypes.SET_USER_READY:
      return {
        ...state,
        ready: payload,
      };

    default:
      return state;
  }
};
