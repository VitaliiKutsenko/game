import { UserActions } from '@src/store/reducers/user/userActions';
import { IUser } from '@src/store/types/userTypes';
import { UserActionsType } from '@src/store/reducers/user/userActionTypes';

const initialState: IUser = {
  name: '',
  avatar: '',
  icon: '',
  level: 0,
};

export const user = (state = initialState, { type, payload }: UserActions): IUser => {
  switch (type) {
    case UserActionsType.SET_USER:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
