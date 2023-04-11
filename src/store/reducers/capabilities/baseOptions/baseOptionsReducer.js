import {
  ADD_CHAMP_PARAMS_POINT,
  REMOVE_CHAMP_PARAMS_POINT,
  SET_CHAMP_PARAMS,
} from './baseOptionsActions';

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
    case SET_CHAMP_PARAMS:
      return { ...state };

    case ADD_CHAMP_PARAMS_POINT:
      return {
        ...state,
        // params: [...state.params, updatePointInState(payload, state, 'add')],
      };

    case REMOVE_CHAMP_PARAMS_POINT:
      return {
        ...state,
        // skills: [...state.skills, updatePointInState(payload, state, 'remove')],
      };

    default:
      return state;
  }
};
