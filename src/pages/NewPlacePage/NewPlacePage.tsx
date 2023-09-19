import NewPlaceForm from "../../components/NewPlaceForm/NewPlaceForm.js";
import usePlacesApi from "../../hooks/usePlacesApi.js";
import { useAppDispatch } from "../../store/index.js";
import { addPlaceActionCreator } from "../../store/places/placesSlice.js";
import { Place } from "../../types.js";
import "./NewPlacePage.css";
import { useNavigate } from "react-router-dom";
import paths from "../../routers/paths/paths.js";
import { Helmet } from "react-helmet";

const NewPlacePage = (): React.ReactElement => {
  const { addPlace } = usePlacesApi();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const actionOnSubmit = async (newPlaceToAdd: Omit<Place, "id">) => {
    const newPlace = await addPlace(newPlaceToAdd);

    dispatch(addPlaceActionCreator(newPlace));
    navigate(paths.places);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Crear un nuevo lugar</title>
        <meta
          name="description"
          content="Crea, con el formulario, un nuevo lugar de Sri Lanka para añadir al listado"
        />
      </Helmet>
      <h1 className="newPlace__title">Añade un lugar</h1>
      <NewPlaceForm actionOnSubmit={actionOnSubmit} />
    </>
  );
};

export default NewPlacePage;
