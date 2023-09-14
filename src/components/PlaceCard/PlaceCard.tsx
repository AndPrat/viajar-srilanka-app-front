import { iconDelete, iconLoaction } from "../../icons/icons";
import { useAppDispatch } from "../../store";
import { removePlaceActionCreator } from "../../store/places/placesSlice";
import { Place } from "../../types";
import Button from "../Button/Button";
import "./PlaceCard.css";

export interface PlaceCardProps {
  place: Place;
  placePosition: number;
}

const PlaceCard = ({
  place: { id, name, subtitle, location, image },
  placePosition,
}: PlaceCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const deletePlace = (id: string) => {
    dispatch(removePlaceActionCreator(id));
  };

  return (
    <article className="place">
      <div className="place__picture">
        <Button
          className="button button--icon button--medium button--delete"
          actionOnClick={() => deletePlace(id)}
          aria-label="delete button"
        >
          {iconDelete}
        </Button>
        <img
          src={image}
          alt={`Lugar de Sri Lanka llamado ${name}`}
          width="271"
          height="249"
          className="place__image"
          loading={placePosition < 2 ? "eager" : "lazy"}
        />
      </div>
      <div className="place__information">
        <h2 className="place__name">{name}</h2>
        <div className="place__list">
          <div className="place__location">
            <i className="place__location-icon">{iconLoaction}</i>
            {location}
          </div>
          <span className="place__subtitle">{subtitle}</span>
        </div>
      </div>
    </article>
  );
};

export default PlaceCard;
