import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Auth, User, signInWithPopup, signOut } from "firebase/auth";
import {
  AuthStateHook,
  IdTokenHook,
  default as auth,
} from "react-firebase-hooks/auth";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { beforeEach } from "vitest";
import { placeMock, placesMock } from "../../mocks/placeMock";
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

  describe("When the user clicks on the button with 'Añadir un lugar' button", () => {
    test("Then it should redirect to '/places' page and show a 'Lugares de interés' heading", async () => {
      const expectedButtonText = /Añadir un lugar/i;
      const expectedHeadingText = /Lugares de interés/i;

      const user: Partial<User> = {
        displayName: "Oscar",
        getIdToken: vi.fn().mockResolvedValue("token"),
      };

      const authStateMock: Partial<AuthStateHook> = [user as User];
      auth.useAuthState = vi.fn().mockReturnValue(authStateMock);

      const useIdTokenHookMock: Partial<IdTokenHook> = [user as User];
      auth.useIdToken = vi.fn().mockReturnValue(useIdTokenHookMock);

      render(
        <MemoryRouter initialEntries={[paths.newPlace]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );

      const expectedNamePlace = "Lugar de Sri Lanka";
      const expectedSubtitleName = "Subtítulo";
      const expectedLoaction = "Localización";
      const expectedSchedule = "Horario";
      const expectedOtherPlace = "Otro lugar relacionado";
      const expectedShortDescription = "Breve descripción";
      const expectedPlaceImage = "Imagen del lugar";

      const expectedInputName = placeMock.name;
      const expectedInputSubtitle = placeMock.subtitle;
      const expectedInputLocation = placeMock.location;
      const expectedInputSchedule = placeMock.schedule;
      const expectedInputOtherPlace = placeMock.otherRelatedPlace;
      const expectedInputImage = placeMock.image;
      const expectedTextAreaDescription = placeMock.description;

      const namePlace = await screen.findByLabelText(expectedNamePlace);
      const subtitleName = await screen.findByLabelText(expectedSubtitleName);
      const location = await screen.findByLabelText(expectedLoaction);
      const schedule = await screen.findByLabelText(expectedSchedule);
      const otherPlace = await screen.findByLabelText(expectedOtherPlace);
      const shortDescription = await screen.findByLabelText(
        expectedShortDescription,
      );
      const placeImage = await screen.findByLabelText(expectedPlaceImage);

      await userEvent.type(namePlace, expectedInputName);
      await userEvent.type(subtitleName, expectedInputSubtitle);
      await userEvent.type(location, expectedInputLocation);
      await userEvent.type(schedule, expectedInputSchedule);
      await userEvent.type(otherPlace, expectedInputOtherPlace);
      await userEvent.type(placeImage, expectedInputImage);
      await userEvent.type(shortDescription, expectedTextAreaDescription);

      expect(namePlace).toHaveValue(expectedInputName);
      expect(subtitleName).toHaveValue(expectedInputSubtitle);
      expect(location).toHaveValue(expectedInputLocation);
      expect(schedule).toHaveValue(expectedInputSchedule);
      expect(otherPlace).toHaveValue(expectedInputOtherPlace);
      expect(placeImage).toHaveValue(expectedInputImage);
      expect(shortDescription).toHaveValue(expectedTextAreaDescription);

      const addButton = await screen.findByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(addButton);

      const placeHeading = await screen.findByRole("heading", {
        name: expectedHeadingText,
      });

      expect(placeHeading).toBeInTheDocument();
    });
  });
});
