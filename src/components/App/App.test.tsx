import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Auth, User, signInWithPopup, signOut } from "firebase/auth";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { beforeEach } from "vitest";
import { placesMock } from "../../mocks/placeMock";
import paths from "../../routers/paths/paths";
import { setupStore } from "../../store";
import App from "./App";

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

  describe("When the delete button link with arial label 'delete button' is clicked", () => {
    test("Then it shouldn't show the name 'Sigiriya' inside a heading", async () => {
      const expectedArialLabelText = "delete button";
      const expectedHeadingText = "Sigiriya";

      const user: Partial<User> = { displayName: "Oscar" };

      const authStateMock: Partial<AuthStateHook> = [user as User];

      auth.useAuthState = vi.fn().mockReturnValue(authStateMock);

      render(
        <MemoryRouter initialEntries={[paths.places]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );

      const placeHeading = await screen.findByRole("heading", {
        name: expectedHeadingText,
      });

      const deleteButton = await screen.findAllByLabelText(
        expectedArialLabelText,
      );

      await userEvent.click(deleteButton[0]);

      expect(placeHeading).not.toBeInTheDocument();
    });
  });
});
