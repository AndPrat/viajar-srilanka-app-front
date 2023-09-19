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
  placeByIdMock,
  placeIdMock,
  placeMock,
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

      const expectedNewPlace = idPlaceMock;

      const {
        result: {
          current: { addPlace },
        },
      } = renderHook(() => usePlacesApi(), { wrapper });

      const newPlace = await addPlace(expectedNewPlace);

      expect(newPlace).toStrictEqual(expectedNewPlace);
    });

    describe("When the function is called and the place couldn't create", () => {
      test("Then it should the error message 'No se ha podido añadir el lugar' when rejecting", () => {
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

describe("Given a function getPlaceById", () => {
  const user: Partial<User> = {
    getIdToken: vi.fn().mockResolvedValue("token"),
  };

  const authStateHookMock: Partial<AuthStateHook> = [user as User];
  auth.useIdToken = vi.fn().mockReturnValue([user]);
  auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

  describe("When the function is called", () => {
    test("Then it should receives a 'Sigiriya' place", async () => {
      const wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
        return <Provider store={store}>{children}</Provider>;
      };

      const {
        result: {
          current: { getPlaceById },
        },
      } = renderHook(() => usePlacesApi(), { wrapper });

      const expectedPlace = placeMock;

      const place = await getPlaceById(placeIdMock);

      expect(place).toStrictEqual(expectedPlace);
    });

    describe("When the function is called and the place couldn't load", () => {
      test("Then it should the error message 'No se ha podido obtener el lugar' when rejecting", () => {
        const wrapper = ({
          children,
        }: PropsWithChildren): React.ReactElement => {
          return <Provider store={store}>{children}</Provider>;
        };

        server.resetHandlers(...errorHandlers);

        const expectedError = new Error("No se ha podido obtener el lugar");
        const place = placeByIdMock;

        const {
          result: {
            current: { getPlaceById },
          },
        } = renderHook(() => usePlacesApi(), { wrapper });

        const placeById = getPlaceById(place._id);

        expect(placeById).rejects.toThrowError(expectedError);
      });
    });
  });
});

describe("Given a function togglePlace", () => {
  const user: Partial<User> = {
    getIdToken: vi.fn().mockResolvedValue("token"),
  };

  const authStateHookMock: Partial<AuthStateHook> = [user as User];
  auth.useIdToken = vi.fn().mockReturnValue([user]);
  auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

  describe("When the function is called", () => {
    test("Then it should return the place 'Sigiriya' with isFavorite property set to 'true'", async () => {
      const wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
        return <Provider store={store}>{children}</Provider>;
      };

      const {
        result: {
          current: { togglePlace },
        },
      } = renderHook(() => usePlacesApi(), { wrapper });

      const modifyPlace = await togglePlace(
        idPlaceMock.id,
        placeMock.isFavorite,
      );

      expect(modifyPlace).toHaveProperty("isFavorite", true);
    });
  });

  describe("When the function is called and the modification couldn't modify and there is an error", () => {
    test("Then it should show the error message 'No se ha podido añadir a favoritos'", () => {
      const wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
        return <Provider store={store}>{children}</Provider>;
      };

      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("No se ha podido añadir a favoritos");

      const {
        result: {
          current: { togglePlace },
        },
      } = renderHook(() => usePlacesApi(), { wrapper });

      const place = togglePlace(idPlaceMock.id, placeMock.isFavorite);

      expect(place).rejects.toThrowError(expectedError);
    });
  });
});
