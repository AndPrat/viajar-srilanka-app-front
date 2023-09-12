import { UiState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const initialUiState: UiState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isLoading: true,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const { showLoading: showLoadingActionCreator } = uiSlice.actions;
