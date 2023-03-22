import {
  ADD_CHAMP_PARAMS_POINT,
  REMOVE_CHAMP_PARAMS_POINT,
  SET_CHAMP_PARAMS,
} from './baseOptionsActionsType';

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
