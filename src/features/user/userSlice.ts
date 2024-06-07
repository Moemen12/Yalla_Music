import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ProfileState {
  profile: string | null;
  isResizerOpened: boolean;
  ToggleCreatorMode: boolean;
  CreatorMode: boolean | undefined;
}

const initialState: ProfileState = {
  profile: null,
  isResizerOpened: false,
  ToggleCreatorMode: false,
  CreatorMode: false,
};

export const userSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    openResizer: (state) => {
      state.isResizerOpened = true;
    },
    closeResizer: (state) => {
      state.isResizerOpened = false;
    },
    ToggleCreatorMode: (state) => {
      state.ToggleCreatorMode = !state.ToggleCreatorMode;
    },
    setCreatorMode: (state, action: PayloadAction<boolean | undefined>) => {
      state.CreatorMode = action.payload;
    },
  },
});

export const { openResizer, closeResizer, ToggleCreatorMode, setCreatorMode } =
  userSlice.actions;
export default userSlice.reducer;
