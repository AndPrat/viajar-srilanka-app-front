import { render, screen } from "@testing-library/react";
import { User } from "firebase/auth";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { setupStore } from "../../store";
import { Provider } from "react-redux";
import { placesMock } from "../../mocks/placeMock";

vi.mock("firebase/auth");

const user: Partial<User> = { displayName: "Oscar" };

const authStateHookMock: Partial<AuthStateHook> = [user as User];
auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

const store = setupStore({
  placesState: {
    places: placesMock,
  },
});

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Viajar a Sri Lanka' in the heading", () => {
      const expectedTextHeading = "Viajar a Sri Lanka";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedTextHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
