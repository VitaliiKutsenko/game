import { SET_USER } from './userActionsType';

const initialState = {
  name: '',
  avatar: '',
  icon: '',
  level: 0,
};

export const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
