import {
  CLEAR_ENEMY_FIGHT_STORE,
  CLEAR_ENEMY_STORE,
  SET_ENEMY_ATTACK,
  SET_ENEMY_DEFENCE,
  SET_ENEMY_READY,
} from '@src/store/reducers/fight/enemyFight/enemyFightActions';

const initialState = {
  attack: [],
  defence: [],
  ready: false,
};

export const enemyFight = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ENEMY_ATTACK:
      return {
        ...state,
        attack: payload,
      };

    case SET_ENEMY_DEFENCE:
      return {
        ...state,
        defence: payload,
      };

    case CLEAR_ENEMY_FIGHT_STORE:
      return {
        ...state,
        ...initialState,
      };

    case SET_ENEMY_READY:
      return {
        ...state,
        ready: payload,
      };

    default:
      return state;
  }
};
