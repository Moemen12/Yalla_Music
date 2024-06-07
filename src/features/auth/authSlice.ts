import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  email: string | null;
}

const initialState: AuthState = {
  email: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeUser: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { storeUser } = authSlice.actions;
export default authSlice.reducer;
