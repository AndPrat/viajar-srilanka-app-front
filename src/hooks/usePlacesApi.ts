import axios from "axios";
import { useCallback } from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import showFeedback from "../showFeedback/showFeedback";
import { useAppDispatch } from "../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/ui/uiSlice";
import { Place, PlaceApi } from "../types";

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
    dispatch(showLoadingActionCreator());

    try {
      const token = await user?.getIdToken();
      const { data: apiPlaces } = await axios.post(
        `${apiUrl}/places`,
        newPlace,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const place = {
        ...apiPlaces.place,
        id: apiPlaces.place._id,
      };
      delete place._id;

      dispatch(hideLoadingActionCreator());
      showFeedback("El lugar se ha añadido con éxito", "success");

      return place;
    } catch {
      dispatch(hideLoadingActionCreator());

      showFeedback("No se ha podido añadir el lugar", "error");

      throw new Error("No se ha podido añadir el lugar");
    }
  };

  const getPlaceById = useCallback(
    async (id: string) => {
      const token = await user?.getIdToken();

      try {
        const { data: apiPlace } = await axios.get(`${apiUrl}/places/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const place = { ...apiPlace.place, id: apiPlace.place._id };
        delete place._id;

        showFeedback("El lugar se ha añadido a favoritos con éxito", "success");

        return place;
      } catch {
        throw new Error("No se ha podido obtener el lugar");
      }
    },
    [user, apiUrl],
  );

  const togglePlace = async (id: string, isFavorite: boolean) => {
    const token = await user?.getIdToken();

    const favorite = isFavorite ? "true" : "false";

    dispatch(showLoadingActionCreator());
    try {
      const { data: apiPlace } = await axios.patch(
        `${apiUrl}/places/${id}`,
        favorite,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "text/plain",
          },
        },
      );
      const place = {
        ...apiPlace.place,
        id: apiPlace.place._id,
      };
      delete place._id;
      dispatch(hideLoadingActionCreator());
      showFeedback("El lugar se ha añadido a favoritos con éxito", "success");

      return place;
    } catch {
      dispatch(hideLoadingActionCreator());

      showFeedback("No se ha podido añadir a favoritos", "error");
      throw new Error("No se ha podido añadir a favoritos");
    }
  };

  return {
    getPlaces,
    deletePlace,
    addPlace,
    getPlaceById,
    togglePlace,
  };
};

export default usePlacesApi;
