import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading/Loading";
import PlacesList from "../../components/PlacesList/PlacesList";
import { auth } from "../../firebase";
import usePlacesApi from "../../hooks/usePlacesApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadPlacesActionCreator } from "../../store/places/placesSlice";
import "./PlacesListPage.css";
import { Helmet } from "react-helmet";

const PlacesListPage = (): React.ReactElement => {
  const places = useAppSelector((state) => state.placesState.places);
  const isLoadingUi = useAppSelector((state) => state.uiState.isLoading);
  const [user, isLoadingAuth] = useAuthState(auth);

  const dispatch = useAppDispatch();
  const { getPlaces } = usePlacesApi();

  const preloadImage = (image: string) => {
    const preloadImageLink = document.createElement("link");
    preloadImageLink.href = image;
    preloadImageLink.rel = "preload";
    preloadImageLink.as = "image";
    document.head.appendChild(preloadImageLink);
  };

  useEffect(() => {
    (async () => {
      if (user) {
        const places = await getPlaces();

        dispatch(loadPlacesActionCreator(places));

        preloadImage(places[0].image);
      }
    })();
  }, [dispatch, getPlaces, user]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lugares de interés</title>
        <meta
          name="description"
          content="El listado de los lugares que hay que visitar de Sri Lanka"
        />
      </Helmet>
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
