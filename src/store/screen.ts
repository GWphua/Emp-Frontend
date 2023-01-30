import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ScreenState {
  screenWidth: number;
  screenHeight: number;
}

const initialState: ScreenState = {
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    screenResize: (state: ScreenState, actions: PayloadAction<ScreenState>) => {
      state.screenWidth = actions.payload.screenWidth;
      state.screenHeight = actions.payload.screenHeight;
    },
  },
});

export const { screenResize } = screenSlice.actions;
export default screenSlice.reducer;
