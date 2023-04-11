import { styleSchema } from '@src/store/reducers/styles/styleSchema';

const initialState = styleSchema;

export const styles = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
