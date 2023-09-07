import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { User } from "firebase/auth";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";

vi.mock("firebase/auth");

const user: Partial<User> = { displayName: "Oscar" };

const authStateHookMock: Partial<AuthStateHook> = [user as User];
auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

describe("Given a NavigationBar component", () => {
  describe("When is rendered", () => {
    test("Then it should have a link with a text 'Ver lugares'", () => {
      const expectedText = "Ver lugares";

      render(
        <BrowserRouter>
          <NavigationBar />
        </BrowserRouter>,
      );

      const navigationLink = screen.getByRole("link", { name: expectedText });

      expect(navigationLink).toBeInTheDocument();
    });
  });
});
