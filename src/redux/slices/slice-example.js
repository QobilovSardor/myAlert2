import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    first: (state, action) => {
      state.value = action.payload.value;
    },
    second: (state) => {
      state.value = 'second';
    },
  },
});

export const { first, second } = slice.actions;

export default slice.reducer;
