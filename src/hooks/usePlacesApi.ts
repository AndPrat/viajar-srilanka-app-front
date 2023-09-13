import axios from "axios";
import { useCallback } from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Place, PlaceApi } from "../types";
import { useAppDispatch } from "../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/ui/uiSlice";

const usePlacesApi = () => {
  const dispatch = useAppDispatch();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [user] = useIdToken(auth);

  const getPlaces = useCallback(async () => {
    dispatch(showLoadingActionCreator());
    const token = await user?.getIdToken();

    try {
      const { data: apiPlaces } = await axios.get<{ places: PlaceApi[] }>(
        `${apiUrl}/lugares`,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      const places = apiPlaces.places.map<Place>(({ _id, ...places }) => ({
        ...places,
        id: _id,
      }));
      dispatch(hideLoadingActionCreator());
      return places;
    } catch {
      dispatch(hideLoadingActionCreator());
      throw new Error("Couldn't load places");
    }
  }, [apiUrl, user, dispatch]);

  return {
    getPlaces: getPlaces,
  };
};

export default usePlacesApi;
