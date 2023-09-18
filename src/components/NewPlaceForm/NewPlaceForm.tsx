import { useEffect, useState } from "react";
import { Place } from "../../types";
import Button from "../Button/Button";
import "./NewPlaceForm.css";

interface NewPlaceProps {
  actionOnSubmit: (places: Omit<Place, "id">) => void;
}

const NewPlace = ({ actionOnSubmit }: NewPlaceProps): React.ReactElement => {
  const initialPlaceData: Omit<Place, "id"> = {
    name: "",
    subtitle: "",
    otherRelatedPlace: "",
    location: "",
    image: "",
    schedule: "",
    description: "",
    isFavorite: false,
  };

  const [newPlace, setNewPlace] = useState<Omit<Place, "id">>(initialPlaceData);

  const [disabled, setDisabled] = useState(true);

  const newPlaceForm = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewPlace((newPlace) => ({
      ...newPlace,
      [event.target.id]: event.target.value,
      isFavorite: false,
    }));
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    actionOnSubmit(newPlace);
  };

  useEffect(() => {
    setDisabled(
      Object.values(newPlace).every((value) => {
        return Boolean(value);
      }),
    );
  }, [newPlace]);

  return (
    <form className="place-form" onSubmit={submitForm}>
      <div className="place-form__group">
        <label htmlFor="name" className="place-form__label">
          Lugar de Sri Lanka
        </label>
        <input
          type="text"
          id="name"
          className="place-form__input"
          value={newPlace.name}
          onChange={newPlaceForm}
        />
      </div>
      <div className="place-form__group">
        <label htmlFor="subtitle" className="place-form__label">
          Subtítulo
        </label>
        <input
          type="text"
          id="subtitle"
          className="place-form__input"
          value={newPlace.subtitle}
          onChange={newPlaceForm}
        />
      </div>
      <div className="place-form__group">
        <label htmlFor="location" className="place-form__label">
          Localización
        </label>
        <input
          type="text"
          id="location"
          className="place-form__input"
          value={newPlace.location}
          onChange={newPlaceForm}
        />
      </div>
      <div className="place-form__group">
        <label htmlFor="schedule" className="place-form__label">
          Horario
        </label>
        <input
          type="text"
          id="schedule"
          className="place-form__input"
          value={newPlace.schedule}
          onChange={newPlaceForm}
        />
      </div>
      <div className="place-form__group">
        <label htmlFor="otherRelatedPlace" className="place-form__label">
          Otro lugar relacionado
        </label>
        <input
          type="text"
          id="otherRelatedPlace"
          className="place-form__input"
          value={newPlace.otherRelatedPlace}
          onChange={newPlaceForm}
        />
      </div>
      <div className="place-form__group">
        <label htmlFor="description" className="place-form__label">
          Breve descripción
        </label>
        <textarea
          id="description"
          className="place-form__input"
          value={newPlace.description}
          onChange={newPlaceForm}
        />
      </div>
      <div className="place-form__group">
        <label htmlFor="image" className="place-form__label">
          Imagen del lugar
        </label>
        <input
          type="url"
          id="image"
          className="place-form__input"
          value={newPlace.image}
          onChange={newPlaceForm}
        />
      </div>
      <div className="place-form__group">
        <Button
          className="button button--primary button--large"
          type="submit"
          disabled={disabled}
        >
          Añadir un lugar
        </Button>
      </div>
    </form>
  );
};

export default NewPlace;
