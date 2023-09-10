import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import "./PlacesListPage.css";
import placesData from "../../data/placesData";
import { loadPlacesActionCreator } from "../../store/places/placesSlice";
import PlacesList from "../../components/PlacesList/PlacesList";

const PlacesListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPlacesActionCreator(placesData));
  }, [dispatch]);

  const numberPlaces = placesData.length > 0;

  return (
    <>
      {numberPlaces ? (
        <>
          <h1 className="places__title">Lugares de interés</h1>
          <PlacesList />
        </>
      ) : (
        <>
          <h1 className="places__title">Lugares de interés</h1>
          <p className="places__text">No hay ningún lugar guardado</p>
        </>
      )}
    </>
  );
};

export default PlacesListPage;
