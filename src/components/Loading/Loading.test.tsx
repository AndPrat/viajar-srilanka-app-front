import { render, screen } from "@testing-library/react";
import Loading from "./Loading";
import { BrowserRouter } from "react-router-dom";

describe("Given a Loading component", () => {
  describe("When is rendered", () => {
    test("Then it should show a loading with 'loading' aria label text ", () => {
      const expectedLoadingText = "loading";

      render(
        <BrowserRouter>
          <Loading />
        </BrowserRouter>,
      );

      const loading = screen.getByLabelText(expectedLoadingText);

      expect(loading).toBeInTheDocument();
    });
  });
});
