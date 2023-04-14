import { BaseOptionsActionTypes } from '@src/store/reducers/capabilities/baseOptions/baseOptionsActionTypes';

export const addChampParamPoint = payload => ({
  type: BaseOptionsActionTypes.ADD_CHAMP_PARAMS_POINT,
  payload,
});
export const removeChampParamPoint = payload => ({
  type: BaseOptionsActionTypes.REMOVE_CHAMP_PARAMS_POINT,
  payload,
});
