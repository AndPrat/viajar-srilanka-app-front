import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { auth } from "../../firebase";
import usePlacesApi from "../../hooks/usePlacesApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadSelectedPlaceActionCreator } from "../../store/places/placesSlice";
import "./PlaceDetailPage.css";
import { iconLoaction, iconOtherPlace, iconSchedule } from "../../icons/icons";

const PlaceDetailPage = () => {
  const [user] = useAuthState(auth);
  const { getPlaceById } = usePlacesApi();
  const dispatch = useAppDispatch();
  const { placeId } = useParams();

  const place = useAppSelector((state) => state.placesState.selectedPlace);

  useEffect(() => {
    (async () => {
      if (user && placeId) {
        const place = await getPlaceById(placeId);

        dispatch(loadSelectedPlaceActionCreator(place));
      }
    })();
  }, [dispatch, getPlaceById, placeId, user]);

  return (
    <article className="placeDetail">
      <img
        src={place?.image}
        alt={`Lugar de Sri Lanka llamado ${place?.name}`}
        width="320"
        height="254"
        className="placeDetail__image"
      />
      <div className="placeDetail__information">
        <h1 className="placeDetail__title">Descubre {place?.name}</h1>
        <span className="placeDetail__subtitle">{place?.subtitle}</span>
        <div className="placeDetail__group">
          <i className="placeDetail__data-icon">{iconLoaction}</i>
          <div className="placeDetail__data-text">
            <span className="placeDetail__data-type">Localización:</span>
            <span className="placeDetail__data-value">{place?.location}</span>
          </div>
        </div>
        <div className="placeDetail__group">
          <i className="placeDetail__data-icon">{iconSchedule}</i>
          <div className="placeDetail__data-text">
            <span className="placeDetail__data-type">Horario: </span>
            <span className="placeDetail__data-value">{place?.schedule}</span>
          </div>
        </div>
        <div className="placeDetail__group">
          <i className="placeDetail__data-icon">{iconOtherPlace}</i>
          <div className="placeDetail__data-text">
            <span className="placeDetail__data-type">
              Otro lugar relacionado:
            </span>
            <span className="placeDetail__data-value">
              {place?.otherRelatedPlace}
            </span>
          </div>
        </div>
        <div className="placeDetail__group">
          <span className="placeDetail__data-type">Descripción: </span>
          <p className="placeDetail__data-value">{place?.description}</p>
        </div>
      </div>
    </article>
  );
};

export default PlaceDetailPage;
