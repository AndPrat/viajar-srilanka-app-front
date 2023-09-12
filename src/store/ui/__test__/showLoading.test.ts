import { UiState } from "../types";
import { showLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a showLoading reducer", () => {
  describe("When it receives a uiState and showLoading action and a current state with a property isLoading set to false", () => {
    test("Then it should return a new state with the property isLoading set to true", () => {
      const currentUiState: UiState = {
        isLoading: false,
      };

      const showLoadingAction = showLoadingActionCreator();

      const newUiState = uiReducer(currentUiState, showLoadingAction);

      expect(newUiState).toHaveProperty("isLoading", true);
    });
  });
});
