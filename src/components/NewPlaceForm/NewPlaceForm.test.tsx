import { render, screen } from "@testing-library/react";
import NewPlaceForm from "./NewPlaceForm";

describe("Given a NewPlaceForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an 'Lugar de Sri Lanka', 'Subtítulo', 'Localización', 'Horario', 'Otro lugar relacionado', 'Breve descripción' and 'Imagen del lugar' fields texts", () => {
      const expectedNamePlace = "Lugar de Sri Lanka";
      const expectedSubtitleName = "Subtítulo";
      const expectedLoaction = "Localización";
      const expectedSchedule = "Horario";
      const expectedOtherPlace = "Otro lugar relacionado";
      const expectedShortDescription = "Breve descripción";
      const expectedPlaceImage = "Imagen del lugar";

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
});
