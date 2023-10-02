import { Link } from "react-router-dom";
import usePlacesApi from "../../hooks/usePlacesApi";
import {
  iconDelete,
  iconHeart,
  iconHeartFavorite,
  iconLoaction,
} from "../../icons/icons";
import { useAppDispatch } from "../../store";
import {
  removePlaceActionCreator,
  toggleByIdPlaceActionCreator,
} from "../../store/places/placesSlice";
import { Place } from "../../types";
import Button from "../Button/Button";
import "./PlaceCard.css";

export interface PlaceCardProps {
  place: Place;
  isLazy: boolean;
}

const PlaceCard = ({
  place: { id, name, subtitle, location, image, isFavorite },
  isLazy,
}: PlaceCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deletePlace, togglePlace } = usePlacesApi();

  const removePlace = (id: string) => {
    deletePlace(id);

    dispatch(removePlaceActionCreator(id));
  };

  const modifyPlace = async (isFavorite: boolean) => {
    const favoritePlace = await togglePlace(id, isFavorite);

    dispatch(toggleByIdPlaceActionCreator(favoritePlace));
  };

  return (
    <article className="place">
      <div className="place__picture">
        <Button
          className="button button--icon button--medium button--delete"
          actionOnClick={() => removePlace(id)}
          aria-label="delete button"
        >
          {iconDelete}
        </Button>
        <Link
          to={`/places/${id}`}
          className="place__link"
          aria-label="detail-link"
        >
          <img
            src={image}
            alt={`Lugar de Sri Lanka llamado ${name}`}
            width="272"
            height="204"
            className="place__image"
            {...(isLazy && { loading: "lazy" })}
            aria-label="place-image"
          />
        </Link>
        <Button
          className="button button--icon button--medium button--toggle"
          actionOnClick={() => modifyPlace(isFavorite)}
          aria-label="toggle-button"
        >
          {isFavorite ? iconHeartFavorite : iconHeart}
        </Button>
      </div>
      <div className="place__information">
        <Link
          to={`/places/${id}`}
          className="place__link"
          aria-label="detail-link"
        >
          <h2 className="place__name">{name}</h2>
          <div className="place__list">
            <div className="place__location">
              <i className="place__location-icon">{iconLoaction}</i>
              {location}
            </div>
            <span className="place__subtitle">{subtitle}</span>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default PlaceCard;
