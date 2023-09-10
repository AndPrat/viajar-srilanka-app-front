import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import "./PlacesListPage.css";
import placesData from "../../data/placesData";
import { loadPlacesActionCreator } from "../../store/places/placesSlice";
import PlacesList from "../../components/PlacesList/PlacesList";

const PlacesListPage = (): React.ReactElement => {
  const places = useAppSelector((state) => state.placesState.places);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadPlacesActionCreator(placesData));
  }, [dispatch]);

  return (
    <>
      <h1 className="places__title">Lugares de interés</h1>
      {places.length > 0 ? (
        <PlacesList />
      ) : (
        <h2 className="places__text">No hay ningún lugar guardado</h2>
      )}
    </>
  );
};

export default PlacesListPage;
