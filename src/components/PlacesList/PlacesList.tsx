import { useAppSelector } from "../../store";
import "./PlacesList.css";

const PlacesList = (): React.ReactElement => {
  const places = useAppSelector((state) => state.placesState.places);

  return (
    <>
      <ul className="places-list">
        {places.map((place) => (
          <li key={place.id} className="places-list__place">
            <h3 className="places-list__title">{place.name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlacesList;
