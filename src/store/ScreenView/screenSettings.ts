import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ScreenSettingsState {
  modalIsOpen: boolean;
}

const initialState: ScreenSettingsState = {
  modalIsOpen: false,
};

const screenSettingsSlice = createSlice({
  name: "screenSettings",
  initialState,
  reducers: {
    toggleModal: (
      state: ScreenSettingsState,
      actions: PayloadAction<boolean>
    ) => {
      state.modalIsOpen = actions.payload;
    },
  },
});

export const { toggleModal } = screenSettingsSlice.actions;
export default screenSettingsSlice.reducer;
