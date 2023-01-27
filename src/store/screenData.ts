import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface screenState {
  screenWidth: number;
}

const initialState: screenState = {
  screenWidth: window.innerWidth,
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    screenResize: (state: screenState, actions: PayloadAction<number>) => {
      state.screenWidth = actions.payload;
    },
  },
});

export const { screenResize } = screenSlice.actions;
export default screenSlice.reducer;
