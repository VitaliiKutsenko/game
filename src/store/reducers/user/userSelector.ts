import { createSelector } from 'reselect';

export const userStore = store => store.user || [];
export const heroesStore = store => store.heroes || [];

export const userSelector = createSelector([userStore, heroesStore], (userStore, heroesStore) => {
  return {
    ...userStore,
    icon: heroesStore.heroes.find(item => item.type === userStore.avatar).icon,
  };
});
