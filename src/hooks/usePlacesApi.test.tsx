import { renderHook } from "@testing-library/react";
import usePlacesApi from "./usePlacesApi";
import { idPlaceMock, placesMock, wrongPlaceIdMock } from "../mocks/placeMock";
import { server } from "../mocks/server";
import { errorHandlers } from "../mocks/handlers";
import { User } from "firebase/auth";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";
import { Provider } from "react-redux";
import { store } from "../store";
import { PropsWithChildren } from "react";

beforeEach(() => {
  vi.clearAllMocks();
});

const user: Partial<User> = { getIdToken: vi.fn().mockResolvedValue("token") };

const authStateHookMock: Partial<AuthStateHook> = [user as User];
auth.useIdToken = vi.fn().mockReturnValue([user]);
auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

describe("Given a function getPlaces", () => {
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
