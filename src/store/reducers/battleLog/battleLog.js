import { SET_USER_LOG } from '@src/store/reducers/battleLog/battleLogActions';
import { reduceBattleLog } from '@src/store/reducers/battleLog/services';

const initialState = { log: [] };

export const battleLog = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_LOG:
      const { user, enemy } = payload;

      return {
        ...state,
        log: [
          ...state.log,
          {
            ...reduceBattleLog(user.attack, enemy.defence, 'enemy'),
            ...reduceBattleLog(enemy.attack, user.defence, 'user'),
          },
        ],
      };

    default:
      return state;
  }
};
