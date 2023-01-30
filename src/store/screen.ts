import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScreenState {
  screenWidth: number;
}

const initialState: ScreenState = {
  screenWidth: window.innerWidth,
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    screenResize: (state: ScreenState, actions: PayloadAction<number>) => {
      state.screenWidth = actions.payload;
    },
  },
});

export const { screenResize } = screenSlice.actions;
export default screenSlice.reducer;
