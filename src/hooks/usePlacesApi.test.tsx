import { renderHook } from "@testing-library/react";
import { User } from "firebase/auth";
import { PropsWithChildren } from "react";
import {
  AuthStateHook,
  IdTokenHook,
  default as auth,
  default as authHook,
} from "react-firebase-hooks/auth";
import { Provider } from "react-redux";
import { errorHandlers } from "../mocks/handlers";
import {
  addPlaceMock,
  idPlaceMock,
  placesMock,
  wrongPlaceIdMock,
} from "../mocks/placeMock";
import { server } from "../mocks/server";
import { store } from "../store";
import usePlacesApi from "./usePlacesApi";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a function getPlaces", () => {
  const user: Partial<User> = {
    getIdToken: vi.fn().mockResolvedValue("token"),
  };

  const authStateHookMock: Partial<AuthStateHook> = [user as User];
  auth.useIdToken = vi.fn().mockReturnValue([user]);
  auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

  describe("When the function is called", () => {
    test("Then it should receives a list of places", async () => {
      const wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
        return <Provider store={store}>{children}</Provider>;
      };

      const {
        result: {
          current: { getPlaces },
        },
      } = renderHook(() => usePlacesApi(), { wrapper });

      const places = await getPlaces();

      expect(places).toStrictEqual(placesMock);
    });
  });

  test("Then it should throw an error 'Couldn't load places' when rejecting", () => {
    const wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
      return <Provider store={store}>{children}</Provider>;
    };

    server.resetHandlers(...errorHandlers);

    const expectedError = new Error("Couldn't load places");

    const {
      result: {
        current: { getPlaces },
      },
    } = renderHook(() => usePlacesApi(), { wrapper });

    const places = getPlaces();

    expect(places).rejects.toThrowError(expectedError);
  });
});

describe("Given a function deletePlace", () => {
  const user: Partial<User> = {
    getIdToken: vi.fn().mockResolvedValue("token"),
  };

  const authStateHookMock: Partial<AuthStateHook> = [user as User];
  auth.useIdToken = vi.fn().mockReturnValue([user]);
  auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

  describe("When the function is called", () => {
    test("Then it should receive a place id", async () => {
      const wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
        return <Provider store={store}>{children}</Provider>;
      };

      const {
        result: {
          current: { deletePlace },
        },
      } = renderHook(() => usePlacesApi(), { wrapper });

      const expectedMessage = "El lugar se ha borrado con éxito";

      const place = await deletePlace(idPlaceMock.id);

      expect(place).toStrictEqual(expectedMessage);
    });

    test("Then it should throw an error 'No se ha podido borrar el lugar' when rejecting", () => {
      const wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
        return <Provider store={store}>{children}</Provider>;
      };

      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("No se ha podido borrar el lugar");

      const {
        result: {
          current: { deletePlace },
        },
      } = renderHook(() => usePlacesApi(), { wrapper });

      const placesPromise = deletePlace(wrongPlaceIdMock);

      expect(placesPromise).rejects.toThrowError(expectedError);
    });
  });
});

describe("Given a function addPlace", () => {
  const user: Partial<User> = {
    getIdToken: vi.fn().mockResolvedValue(null),
  };

  const idTokenHook: Partial<IdTokenHook> = [user as User];
  const authStateHookMock: Partial<AuthStateHook> = [user as User];

  authHook.useIdToken = vi.fn().mockReturnValue(idTokenHook);
  authHook.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

  describe("When the function is called", () => {
    test("Then it should receive a place id", async () => {
      const wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
        return <Provider store={store}>{children}</Provider>;
      };

      const expectedNewPlace = addPlaceMock;

      const {
        result: {
          current: { addPlace },
        },
      } = renderHook(() => usePlacesApi(), { wrapper });

      const newPlace = await addPlace(expectedNewPlace);

      expect(newPlace).toStrictEqual({ place: expectedNewPlace });
    });

    describe("When the function is called and the place couldn't create", () => {
      test("Then it should the error message 'No se ha podido añadir el lugar'", () => {
        const wrapper = ({
          children,
        }: PropsWithChildren): React.ReactElement => {
          return <Provider store={store}>{children}</Provider>;
        };

        server.resetHandlers(...errorHandlers);

        const expectedError = new Error("No se ha podido añadir el lugar");
        const place = addPlaceMock;

        const {
          result: {
            current: { addPlace },
          },
        } = renderHook(() => usePlacesApi(), { wrapper });

        const newPlace = addPlace(place);

        expect(newPlace).rejects.toThrowError(expectedError);
      });
    });
  });
});
