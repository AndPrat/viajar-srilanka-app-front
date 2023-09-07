import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { User } from "firebase/auth";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";

vi.mock("firebase/auth");

const user: Partial<User> = { displayName: "Oscar" };

const authStateHookMock: Partial<AuthStateHook> = [user as User];
auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

describe("Given a Header component", () => {
  describe("When it's rendered with the text 'Viajar a Sri Lanka'", () => {
    test("Then it should show the text 'Viajar a Sri Lanka' in the heading", () => {
      const expectedTextHeading = "Viajar a Sri Lanka";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedTextHeading,
      });

      expect(heading).toBeInTheDocument();
    });

    describe("When it's rendered with an image with alt 'Viajar a Sri Lanka logo' ", () => {
      test("Then it should show a image with alt 'Viajar a Sri Lanka logo'", () => {
        const expectedAltText = "Viajar a Sri Lanka logo";

        render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>,
        );

        const viajarSriLankalogo = screen.getByAltText(expectedAltText);

        expect(viajarSriLankalogo).toBeInTheDocument();
      });
    });
  });
});
