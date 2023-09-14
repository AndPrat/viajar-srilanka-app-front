import "./NewPlaceForm.css";

const NewPlaceForm = (): React.ReactElement => {
  return (
    <form className="place-form">
      <div className="place-form__group">
        <label htmlFor="namePlace" className="place-form__label">
          Lugar de Sri Lanka
        </label>
        <input type="text" id="namePlace" className="place-form__input" />
      </div>
      <div className="place-form__group">
        <label htmlFor="subtitleName" className="place-form__label">
          Subtítulo
        </label>
        <input type="text" id="subtitleName" className="place-form__input" />
      </div>
      <div className="place-form__group">
        <label htmlFor="location" className="place-form__label">
          Localización
        </label>
        <input type="text" id="location" className="place-form__input" />
      </div>
      <div className="place-form__group">
        <label htmlFor="schedule" className="place-form__label">
          Horario
        </label>
        <input type="text" id="schedule" className="place-form__input" />
      </div>
      <div className="place-form__group">
        <label htmlFor="otherPlace" className="place-form__label">
          Otro lugar relacionado
        </label>
        <input type="text" id="otherPlace" className="place-form__input" />
      </div>
      <div className="place-form__group">
        <label htmlFor="shortDescription" className="place-form__label">
          Breve descripción
        </label>
        <input
          type="text"
          id="shortDescription"
          className="place-form__input"
        />
      </div>
      <div className="place-form__group">
        <label htmlFor="placeImage" className="place-form__label">
          Imagen del lugar
        </label>
        <input type="url" id="placeImage" className="place-form__input" />
      </div>
      <div className="place-form__group">
        <button className="button button--primary button--large">
          Añadir un lugar
        </button>
      </div>
    </form>
  );
};

export default NewPlaceForm;
