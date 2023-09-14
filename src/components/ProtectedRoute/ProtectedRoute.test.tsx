import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import paths from "../../routers/paths/paths";
import App from "../App/App";
import { Provider } from "react-redux";
import { store } from "../../store";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";

describe("Given a ProtectedRoute component", () => {
  describe("When is rendered and the user isn't logged and try to enter to '/places' page", () => {
    test("Then it should show the '/home' page with the 'Tu viaje a Sri Lanka empieza aquí' heading ", async () => {
      const authStateMock: Partial<AuthStateHook> = [null];

      auth.useAuthState = vi.fn().mockReturnValue(authStateMock);

      const placesPath = paths.places;
      const expectedHeadingText = "Tu viaje a Sri Lanka empieza aquí";

      render(
        <MemoryRouter initialEntries={[placesPath]}>
          <Provider store={store}>
            <App />
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
