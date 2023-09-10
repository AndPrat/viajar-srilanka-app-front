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

  return (
    <>
      <h1 className="places__title">Lugares de interés</h1>
      <PlacesList />
    </>
  );
};

export default PlacesListPage;
