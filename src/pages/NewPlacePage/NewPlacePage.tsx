import { lazy } from "react";
import "./NewPlacePage.css";
import NewPlaceForm from "../../components/NewPlaceForm/NewPlaceForm.js";

export const LazyNewPlacePage = lazy(
  () => import("../../pages/NewPlacePage/NewPlacePage.js"),
);

const NewPlacePage = (): React.ReactElement => {
  return (
    <>
      <h1 className="newPlace__title">Añade un lugar</h1>
      <NewPlaceForm />
    </>
  );
};

export default NewPlacePage;
