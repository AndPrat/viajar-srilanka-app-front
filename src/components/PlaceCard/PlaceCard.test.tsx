import { Provider } from "react-redux";
import { placeMock } from "../../mocks/placeMock";
import { store } from "../../store";
import PlaceCard from "./PlaceCard";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Given a PlaceCard component", () => {
  describe("When it receives a place name 'Sigiriya'", () => {
    test("Then it should show the name 'Sigiriya' inside a heading", () => {
      const expectedHeadingText = "Sigiriya";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PlaceCard place={placeMock} isLazy={false} />
          </Provider>
          ,
        </BrowserRouter>,
      );

      const placeHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(placeHeading).toBeInTheDocument();
    });
  });

  describe("When it recevies a subtitle text 'Templo de la roca del león'", () => {
    test("Then it should show the text 'Templo de la roca del león'", () => {
      const expectedSubtilteText = "Templo de la roca del león";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PlaceCard place={placeMock} isLazy={false} />
          </Provider>
          ,
        </BrowserRouter>,
      );

      const subtitleText = screen.getByText(expectedSubtilteText);

      expect(subtitleText).toBeInTheDocument();
    });
  });

  describe("Then it receives a location text 'Matale'", () => {
    test("Then it should show the text 'Matale'", () => {
      const expectedLocationText = "Matale";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PlaceCard place={placeMock} isLazy={true} />
          </Provider>
          ,
        </BrowserRouter>,
      );

      const locationText = screen.getByText(expectedLocationText);

      expect(locationText).toBeInTheDocument();
    });
  });

  describe("Then it receives a image with 'Lugar de Sri Lanka llamado Sigiriya' alt text", () => {
    test("Then it should show an alt text 'Lugar de Sri Lanka llamado Sigiriya'", () => {
      const expectedAltText = "Lugar de Sri Lanka llamado Sigiriya";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PlaceCard place={placeMock} isLazy={false} />
          </Provider>
          ,
        </BrowserRouter>,
      );

      const imageAltText = screen.getByAltText(expectedAltText);

      expect(imageAltText).toBeInTheDocument();
    });
  });

  describe("When it receives a imatge with 'cloudinary' path", () => {
    test("Then it should show an imatge with 'cloudinary' path", () => {
      const expectedImage = "place-image";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PlaceCard place={placeMock} isLazy={false} />
          </Provider>
          ,
        </BrowserRouter>,
      );

      const cloudinaryImage = screen.getByLabelText(expectedImage);

      expect(cloudinaryImage).toBeInTheDocument();
    });
  });
});
