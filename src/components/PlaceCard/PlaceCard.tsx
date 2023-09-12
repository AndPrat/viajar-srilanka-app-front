import { iconLoaction } from "../../icons/icons";
import { Place } from "../../types";
import "./PlaceCard.css";

export interface PlaceCardProps {
  place: Place;
  placePosition: number;
}

const PlaceCard = ({
  place: { name, subtitle, location, image },
  placePosition,
}: PlaceCardProps): React.ReactElement => {
  return (
    <article className="place">
      <div className="place__picture">
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
