import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading/Loading";
import PlacesList from "../../components/PlacesList/PlacesList";
import { auth } from "../../firebase";
import usePlacesApi from "../../hooks/usePlacesApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadPlacesActionCreator } from "../../store/places/placesSlice";
import "./PlacesListPage.css";

const PlacesListPage = (): React.ReactElement => {
  const places = useAppSelector((state) => state.placesState.places);
  const isLoadingUi = useAppSelector((state) => state.uiState.isLoading);
  const [user, isLoadingAuth] = useAuthState(auth);

  const dispatch = useAppDispatch();
  const { getPlaces } = usePlacesApi();

  useEffect(() => {
    (async () => {
      if (user) {
        const places = await getPlaces();

        dispatch(loadPlacesActionCreator(places));
      }
    })();
  }, [dispatch, getPlaces, user]);

  return (
    <>
      <h1 className="places__title">Lugares de interés</h1>
      {isLoadingUi && <Loading />}
      {places.length > 0
        ? !isLoadingUi && !isLoadingAuth && <PlacesList />
        : !isLoadingUi &&
          !isLoadingAuth && (
            <h2 className="places__text">No hay ningún lugar guardado</h2>
          )}
    </>
  );
};

export default PlacesListPage;
