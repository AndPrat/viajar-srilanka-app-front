import { render, screen } from "@testing-library/react";
import { User, signInWithPopup, signOut } from "firebase/auth";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";
import { setupStore } from "../../store";
import { Provider } from "react-redux";
import { placesMock } from "../../mocks/placeMock";
import { beforeEach } from "vitest";
import { Auth } from "firebase/auth";
import paths from "../../routers/paths/paths";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  vi.clearAllMocks();
});

vi.mock("firebase/auth", async () => {
  const actual: Auth = await vi.importActual("firebase/auth");
  return {
    ...actual,
    signOut: vi.fn(),
    signInWithPopup: vi.fn(),
  };
});

const store = setupStore({
  placesState: {
    places: placesMock,
  },
});

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    const user: Partial<User> = { displayName: "Oscar" };

    const authStateHookMock: Partial<AuthStateHook> = [user as User];

    auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

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

  describe("When the user is logged and the logout button is clicked", () => {
    test("Then the received function should be called", async () => {
      const user: Partial<User> = { displayName: "Oscar" };

      const authStateMock: Partial<AuthStateHook> = [user as User];

      auth.useAuthState = vi.fn().mockReturnValue(authStateMock);

      const expectedLogOutButtonText = /cerrar sesión/i;

      render(
        <MemoryRouter initialEntries={[paths.places]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );

      const logoutButton = await screen.findByRole("button", {
        name: expectedLogOutButtonText,
      });

      await userEvent.click(logoutButton);

      expect(signOut).toHaveBeenCalled();
    });
  });

  describe("When the user clicked the button 'Accede' and is logged", () => {
    test("Then the received function should be called", async () => {
      const authStateMock: Partial<AuthStateHook> = [null];

      auth.useAuthState = vi.fn().mockReturnValue(authStateMock);

      const expectedLogInButtonText = /accede/i;

      render(
        <MemoryRouter initialEntries={[paths.homePage]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );

      const loginButton = await screen.findByRole("button", {
        name: expectedLogInButtonText,
      });

      await userEvent.click(loginButton);

      expect(signInWithPopup).toHaveBeenCalled();
    });
  });
});
