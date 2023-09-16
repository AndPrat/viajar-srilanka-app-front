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
import showFeedback from "../showFeedback/showFeedback";

export const apiUrl = import.meta.env.VITE_API_URL;

const usePlacesApi = () => {
  const dispatch = useAppDispatch();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [user] = useIdToken(auth);

  const getPlaces = useCallback(async () => {
    dispatch(showLoadingActionCreator());
    const token = await user?.getIdToken();

    try {
      const { data: apiPlaces } = await axios.get<{ places: PlaceApi[] }>(
        `${apiUrl}/places`,
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
      showFeedback("No se han podido cargar lugares", "error");

      throw new Error("Couldn't load places");
    }
  }, [apiUrl, user, dispatch]);

  const deletePlace = async (_id: string) => {
    const token = await user?.getIdToken();
    try {
      const {
        data: { message },
      } = await axios.delete(`${apiUrl}/places/${_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      showFeedback(message, "success");

      return message;
    } catch {
      showFeedback("No se ha podido borrar el lugar", "error");

      throw new Error("No se ha podido borrar el lugar");
    }
  };

  const addPlace = async (newPlace: Omit<Place, "id">) => {
    const token = await user?.getIdToken();
    try {
      const { data: apiPlaces } = await axios.post(`${apiUrl}/places`, {
        headers: { Authorization: `Bearer ${token}` },
        newPlace,
      });

      return apiPlaces;
    } catch {
      throw new Error("No se ha podido añadir el lugar");
    }
  };

  return {
    getPlaces,
    deletePlace,
    addPlace,
  };
};

export default usePlacesApi;
