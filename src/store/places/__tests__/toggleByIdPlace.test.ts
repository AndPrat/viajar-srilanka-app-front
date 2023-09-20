import {
  placeIdMock,
  placeMockModify,
  placesMock,
} from "../../../mocks/placeMock";
import { placesReducer, toggleByIdPlaceActionCreator } from "../placesSlice";
import { PlacesState } from "../types";

describe("Given a toggleByIdPlace reducer", () => {
  describe("When it receives a placeState with a place 'Sigiriya' with property isFavorite set to false and a toggleByIdPlace action", () => {
    test("Then it should return a new state with the isFavorite property toggled to true", () => {
      const currentPlaceState: PlacesState = {
        places: placesMock,
      };
      const placeId = placeIdMock;

      const toggleByIdPlaceAction =
        toggleByIdPlaceActionCreator(placeMockModify);

      const newPlaceState = placesReducer(
        currentPlaceState,
        toggleByIdPlaceAction,
      );

      const placeToggle = newPlaceState.places.find(({ id }) => id === placeId);

      expect(placeToggle).toHaveProperty("isFavorite", true);
    });
  });
});
