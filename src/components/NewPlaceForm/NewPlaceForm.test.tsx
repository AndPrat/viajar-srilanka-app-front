import { render, screen } from "@testing-library/react";
import NewPlaceForm from "./NewPlaceForm";
import { placeMock } from "../../mocks/placeMock";
import userEvent from "@testing-library/user-event";

describe("Given a NewPlaceForm component", () => {
  const expectedNamePlace = "Lugar de Sri Lanka";
  const expectedSubtitleName = "Subtítulo";
  const expectedLoaction = "Localización";
  const expectedSchedule = "Horario";
  const expectedOtherPlace = "Otro lugar relacionado";
  const expectedShortDescription = "Breve descripción";
  const expectedPlaceImage = "Imagen del lugar";

  describe("When it is rendered", () => {
    test("Then it should show an 'Lugar de Sri Lanka', 'Subtítulo', 'Localización', 'Horario', 'Otro lugar relacionado', 'Breve descripción' and 'Imagen del lugar' fields texts", () => {
      render(<NewPlaceForm />);

      const namePlace = screen.getByLabelText(expectedNamePlace);
      const subtitleName = screen.getByLabelText(expectedSubtitleName);
      const location = screen.getByLabelText(expectedLoaction);
      const schedule = screen.getByLabelText(expectedSchedule);
      const otherPlace = screen.getByLabelText(expectedOtherPlace);
      const shortDescription = screen.getByLabelText(expectedShortDescription);
      const placeImage = screen.getByLabelText(expectedPlaceImage);

      expect(namePlace).toBeInTheDocument();
      expect(subtitleName).toBeInTheDocument();
      expect(location).toBeInTheDocument();
      expect(schedule).toBeInTheDocument();
      expect(otherPlace).toBeInTheDocument();
      expect(shortDescription).toBeInTheDocument();
      expect(placeImage).toBeInTheDocument();
    });
  });

  test("Then it should show a button with 'Añadir un lugar' text", () => {
    const expectedButtonText = "Añadir un lugar";

    render(<NewPlaceForm />);

    const button = screen.getByRole("button", { name: expectedButtonText });

    expect(button).toBeInTheDocument();
  });

  describe("When it is rendered and the user types in every input", () => {
    test("Then it should show a full form", async () => {
      render(<NewPlaceForm />);

      const expectedInputName = placeMock.name;
      const expectedInputSubtitle = placeMock.subtitle;
      const expectedInputLocation = placeMock.location;
      const expectedInputSchedule = placeMock.schedule;
      const expectedInputOtherPlace = placeMock.otherRelatedPlace;
      const expectedInputImage = placeMock.image;
      const expectedTextAreaDescription = placeMock.description;

      const namePlace = screen.getByLabelText(expectedNamePlace);
      const subtitleName = screen.getByLabelText(expectedSubtitleName);
      const location = screen.getByLabelText(expectedLoaction);
      const schedule = screen.getByLabelText(expectedSchedule);
      const otherPlace = screen.getByLabelText(expectedOtherPlace);
      const shortDescription = screen.getByLabelText(expectedShortDescription);
      const placeImage = screen.getByLabelText(expectedPlaceImage);

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
    });
  });
});
