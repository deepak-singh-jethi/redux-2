import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAutheticated: false,
};

const authSlice = createSlice({
  name: "authentications",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAutheticated = true;
    },
    logout(state) {
      state.isAutheticated = false;
      console.log(state.isAutheticated);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
