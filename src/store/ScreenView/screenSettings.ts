import { createSlice } from "@reduxjs/toolkit";

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
    openModal: (state: ScreenSettingsState) => {
      state.modalIsOpen = true;
    },
    closeModal: (state: ScreenSettingsState) => {
      state.modalIsOpen = false;
    },
  },
});

export const { openModal, closeModal } = screenSettingsSlice.actions;
export default screenSettingsSlice.reducer;
