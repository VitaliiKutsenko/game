import { reduceBattleLog } from '@src/store/reducers/battleLog/services';
import { BattleLogActions } from '@src/store/reducers/battleLog/battleLogActionTypes';

export interface BattleLogState {
  log: any[];
}
const initialState: BattleLogState = { log: [] };

export const battleLog = (state = initialState, { type, payload }): BattleLogState => {
  switch (type) {
    case BattleLogActions.SET_USER_LOG:
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
