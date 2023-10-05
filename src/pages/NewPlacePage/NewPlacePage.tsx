import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import NewPlaceForm from "../../components/NewPlaceForm/NewPlaceForm.js";
import usePlacesApi from "../../hooks/usePlacesApi.js";
import paths from "../../routers/paths/paths.js";
import { useAppDispatch } from "../../store/index.js";
import { addPlaceActionCreator } from "../../store/places/placesSlice.js";
import { Place } from "../../types.js";
import "./NewPlacePage.css";
import Hero from "../../components/Hero/Hero.js";
import {
  altHeroImageNewPlace,
  desktopHeroImageNewPlace,
  desktopWebpHeroImageNewPlace,
  fallbackHeroImageNewPlace,
  mobileHeroImageNewPlace,
  mobileWebpHeroImageNewPlace,
  titleHeroImageNewPlace,
} from "../../heroImages/heroImages.js";

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
        <title>Viajar a Sri Lanka | Añade un nuevo lugar</title>
        <meta
          name="description"
          content="Añade, con el formulario, un nuevo lugar de Sri Lanka para añadir al listado"
        />
      </Helmet>
      <Hero
        alt={altHeroImageNewPlace}
        desktop={desktopHeroImageNewPlace}
        desktopWebp={desktopWebpHeroImageNewPlace}
        fallback={fallbackHeroImageNewPlace}
        mobile={mobileHeroImageNewPlace}
        mobileWebp={mobileWebpHeroImageNewPlace}
        title={titleHeroImageNewPlace}
      />
      <h1 className="newPlace__title">Añade un lugar</h1>
      <NewPlaceForm actionOnSubmit={actionOnSubmit} />
    </>
  );
};

export default NewPlacePage;
