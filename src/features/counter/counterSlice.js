import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isloggedIn: false,
  userinfo:''
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginUser: (state,action) => {
      state.userinfo = action.payload
      state.isloggedIn = true
      console.log(state)
    }
  }
});

export const { loginUser } = counterSlice.actions;

export default counterSlice.reducer;
