import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Place } from "../../types";
import { PlacesState } from "./types";

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
    removePlace: (
      currentPlaceState,
      action: PayloadAction<string>,
    ): PlacesState => ({
      ...currentPlaceState,
      places: currentPlaceState.places.filter(
        (place) => place.id !== action.payload,
      ),
    }),
    addPlace: (
      currentPlaceState,
      action: PayloadAction<Place>,
    ): PlacesState => ({
      ...currentPlaceState,
      places: [...currentPlaceState.places, action.payload],
    }),
    loadSelectedPlace: (
      currentPlaceState: PlacesState,
      action: PayloadAction<Place>,
    ): PlacesState => ({
      ...currentPlaceState,
      selectedPlace: action.payload,
    }),
    toggleByIdPlace: (
      currentPlaceState,
      action: PayloadAction<string>,
    ): PlacesState => ({
      ...currentPlaceState,
      places: currentPlaceState.places.map<Place>((place) =>
        place.id === action.payload
          ? { ...place, isFavorite: !place.isFavorite }
          : { ...place },
      ),
    }),
  },
});

export const placesReducer = placesSlice.reducer;
export const {
  loadPlaces: loadPlacesActionCreator,
  removePlace: removePlaceActionCreator,
  addPlace: addPlaceActionCreator,
  loadSelectedPlace: loadSelectedPlaceActionCreator,
  toggleByIdPlace: toggleByIdPlaceActionCreator,
} = placesSlice.actions;
