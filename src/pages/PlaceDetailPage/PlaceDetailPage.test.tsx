import { render, screen } from "@testing-library/react";
import { User } from "firebase/auth";
import {
  AuthStateHook,
  IdTokenHook,
  default as auth,
} from "react-firebase-hooks/auth";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { placeMock, placesMock } from "../../mocks/placeMock";
import paths from "../../routers/paths/paths";
import { setupStore } from "../../store";
import PlaceDetailPage from "./PlaceDetailPage";

describe("Given a PlaceDetailPage component", () => {
  describe("When it is rendered and receives 'Sigiriya' place id", () => {
    test("Then it should show a heading with the text 'Descubre Sigiriya'", async () => {
      const store = setupStore({
        placesState: {
          places: placesMock,
          selectedPlace: placeMock,
        },
      });

      const expectedHeadingText = "Descubre Sigiriya";

      const user: Partial<User> = {
        displayName: "Oscar",
        getIdToken: vi.fn().mockResolvedValue("token"),
      };

      const authStateHookMock: Partial<AuthStateHook> = [user as User];
      auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

      const useIdTokenHookMock: Partial<IdTokenHook> = [user as User];
      auth.useIdToken = vi.fn().mockReturnValue(useIdTokenHookMock);

      render(
        <MemoryRouter initialEntries={[paths.detailPlace]}>
          <Provider store={store}>
            <PlaceDetailPage />
          </Provider>
        </MemoryRouter>,
      );

      const heading = await screen.findByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
