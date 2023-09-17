import { useAppSelector } from "../../store";
import PlaceCard from "../PlaceCard/PlaceCard";
import "./PlacesList.css";

const PlacesList = (): React.ReactElement => {
  const places = useAppSelector((state) => state.placesState.places);

  return (
    <>
      <ul className="places-list">
        {places.map((place, placePosition) => (
          <li key={place.id} className="places-list__place">
            <PlaceCard place={place} isLazy={placePosition > 1} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlacesList;
