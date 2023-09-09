import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PlacesState } from "./types";
import { Place } from "../../types";

const initialPlacesState: PlacesState = {
  places: [],
};

const placesSlice = createSlice({
  name: "places",
  initialState: initialPlacesState,
  reducers: {
    loadPlaces: (
      currentPlaceState,
      action: PayloadAction<Place[]>,
    ): PlacesState => ({
      ...currentPlaceState,
      places: action.payload,
    }),
  },
});

export const placesReducer = placesSlice.reducer;
export const { loadPlaces: loadPlacesActionCreator } = placesSlice.actions;
