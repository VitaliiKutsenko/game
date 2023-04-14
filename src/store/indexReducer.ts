import { combineReducers } from 'redux';
import { user } from '@src/store/reducers/user/userReducer';
import { battleLog } from '@src/store/reducers/battleLog/battleLog';
import { capabilities } from '@src/store/reducers/capabilities';
import { fight } from '@src/store/reducers/fight';

export const rootReducer = combineReducers({
  capabilities,
  fight,
  user,
  battleLog,
});
export type RootState = ReturnType<typeof rootReducer>;
