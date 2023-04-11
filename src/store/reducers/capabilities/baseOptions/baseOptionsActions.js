export const SET_CHAMP_PARAMS = 'SET_CHAMP_PARAMS';
export const ADD_CHAMP_PARAMS_POINT = 'ADD_CHAMP_PARAMS_POINT';
export const REMOVE_CHAMP_PARAMS_POINT = 'REMOVE_CHAMP_PARAMS_POINT';

export const setChampParam = payload => ({
  type: SET_CHAMP_PARAMS,
  payload,
});

export const addChampParamPoint = payload => ({
  type: ADD_CHAMP_PARAMS_POINT,
  payload,
});
export const removeChampParamPoint = payload => ({
  type: REMOVE_CHAMP_PARAMS_POINT,
  payload,
});
