import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ScreenSizeState {
  screenWidth: number;
  screenHeight: number;
}

const initialState: ScreenSizeState = {
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    screenResize: (state: ScreenSizeState, actions: PayloadAction<ScreenSizeState>) => {
      state.screenWidth = actions.payload.screenWidth;
      state.screenHeight = actions.payload.screenHeight;
    },
  },
});

export const { screenResize } = screenSlice.actions;
export default screenSlice.reducer;
