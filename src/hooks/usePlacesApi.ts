import axios from "axios";
import { useCallback } from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Place, PlaceApi } from "../types";

const usePlacesApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [user] = useIdToken(auth);

  const getPlaces = useCallback(async () => {
    const token = await user?.getIdToken();

    try {
      const { data: apiPlaces } = await axios.get<{ places: PlaceApi[] }>(
        `${apiUrl}/lugares`,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      const places = apiPlaces.places.map<Place>(
        ({
          _id,
          name,
          subtitle,
          location,
          schedule,
          otherRelatedPlace,
          description,
          image,
        }) => ({
          id: _id,
          name,
          subtitle,
          location,
          schedule,
          otherRelatedPlace,
          description,
          image,
        }),
      );

      return places;
    } catch {
      throw new Error("Couldn't load places");
    }
  }, [apiUrl, user]);

  return {
    getPlaces: getPlaces,
  };
};

export default usePlacesApi;
