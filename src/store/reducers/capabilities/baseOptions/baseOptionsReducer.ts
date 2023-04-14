import { BaseOptionsActionTypes } from '@src/store/reducers/capabilities/baseOptions/baseOptionsActionTypes';

const initialState = {
  params: [
    {
      type: 'life',
      point: 0,
    },
    {
      type: 'evasion',
      point: 0,
    },
    {
      type: 'energy',
      point: 0,
    },
  ],
};

export const baseOptions = (state = initialState, { type, payload }) => {
  switch (type) {
    case BaseOptionsActionTypes.ADD_CHAMP_PARAMS_POINT:
      return {
        ...state,
        // params: [...state.params, updatePointInState(payload, state, 'add')],
      };

    case BaseOptionsActionTypes.REMOVE_CHAMP_PARAMS_POINT:
      return {
        ...state,
        // skills: [...state.skills, updatePointInState(payload, state, 'remove')],
      };

    default:
      return state;
  }
};
