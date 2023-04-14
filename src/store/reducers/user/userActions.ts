import { UserActionsType } from '@src/store/reducers/user/userActionTypes';

export interface UserActions {
  type: UserActionsType;
  payload?: any;
}
export const setUser = (payload: any) => ({
  type: UserActionsType.SET_USER,
  payload,
});
