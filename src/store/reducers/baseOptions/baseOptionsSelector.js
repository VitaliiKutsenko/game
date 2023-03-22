import { createSelector } from 'reselect';

export const champStore = store => store.championsParams || [];
export const champStyleStore = store => store.styles.championsStyle || [];

export const baseOptionsSelector = createSelector(
  [champStore, champStyleStore],
  (champStore, champStyleStore) => {
    const { params = [] } = champStore;

    return params.map(item => {
      return {
        ...item,
        ...champStyleStore[item.type],
      };
    });
  }
);
