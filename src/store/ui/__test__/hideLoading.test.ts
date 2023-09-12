import { UiState } from "../types";
import { hideLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a hideLoading reducer", () => {
  describe("When it receives a uiState and hideLoading and a current state with a property isLoading set to true", () => {
    test("Then it should return a new state with the property isLoading set to false", () => {
      const currentUiState: UiState = {
        isLoading: true,
      };

      const hideLoadingAction = hideLoadingActionCreator();

      const newUiState = uiReducer(currentUiState, hideLoadingAction);

      expect(newUiState).toHaveProperty("isLoading", false);
    });
  });
});
