import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ScreenSettingsState {
  isBlur: boolean;
}

const initialState: ScreenSettingsState = {
  isBlur: false,
};

const screenSettingsSlice = createSlice({
  name: "screenSettings",
  initialState,
  reducers: {
    screenBlur: (
      state: ScreenSettingsState,
      actions: PayloadAction<boolean>
    ) => {
      state.isBlur = actions.payload;
    },
  },
});

export const { screenBlur } = screenSettingsSlice.actions;
export default screenSettingsSlice.reducer;
