import {
  placeIdMock,
  placeMockModify,
  placesMock,
} from "../../../mocks/placeMock";
import { placesReducer, toggleByIdPlaceActionCreator } from "../placesSlice";
import { PlacesState } from "../types";

describe("Given a toggleByIdPlace reducer", () => {
  describe("When it receives a placeState and a toggleByIdPlace action with false", () => {
    test("Then it should return a new state with the isFavorite property of 'Sigiriya' togled to true", () => {
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
