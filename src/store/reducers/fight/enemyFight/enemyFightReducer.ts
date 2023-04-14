import { EnemyFightActionTypes } from '@src/store/reducers/fight/enemyFight/enemyFightActionTypes';

const initialState = {
  attack: [],
  defence: [],
  ready: false,
};

export const enemyFight = (state = initialState, { type, payload }) => {
  switch (type) {
    case EnemyFightActionTypes.SET_ENEMY_ATTACK:
      return {
        ...state,
        attack: payload,
      };

    case EnemyFightActionTypes.SET_ENEMY_DEFENCE:
      return {
        ...state,
        defence: payload,
      };

    case EnemyFightActionTypes.CLEAR_ENEMY_FIGHT_STORE:
      return {
        ...state,
        ...initialState,
      };

    case EnemyFightActionTypes.SET_ENEMY_READY:
      return {
        ...state,
        ready: payload,
      };

    default:
      return state;
  }
};
