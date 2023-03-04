import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'arthur',
    email: 'john@gmail.com',
  },
  reducers: {
    update(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});
console.log(userSlice);

export default userSlice.reducer;
export const { update } = userSlice.actions;
