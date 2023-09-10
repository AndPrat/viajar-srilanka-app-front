import { iconLoaction } from "../../icons/icons";
import { Place } from "../../types";
import "./PlaceCard.css";

export interface PlaceCardProps {
  place: Place;
}

const PlaceCard = ({
  place: { name, subtitle, location, image },
}: PlaceCardProps): React.ReactElement => {
  return (
    <article className="place">
      <picture className="place__picture">
        <img
          src={image}
          alt={`Lugar de Sri Lanka llamado ${name}`}
          width="271"
          height="249"
          className="place__image"
        />
      </picture>
      <div className="place__information">
        <h2 className="place__name">{name}</h2>
        <ul className="place__list">
          <li className="place__location">
            <i className="place__location-icon">{iconLoaction}</i>
            {location}
          </li>
          <li className="place__subtitle">{subtitle}</li>
        </ul>
      </div>
    </article>
  );
};

export default PlaceCard;
