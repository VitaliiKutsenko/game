const initialState = {
  baseParams: [
    {
      type: 'strength',
      point: 0,
    },
    {
      type: 'agility',
      point: 0,
    },
    {
      type: 'intelligence',
      point: 0,
    },
    {
      type: 'charisma',
      point: 0,
    },
  ],
};

export const baseParams = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
