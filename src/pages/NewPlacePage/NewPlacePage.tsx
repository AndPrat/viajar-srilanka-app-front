import { lazy } from "react";
import "./NewPlacePage.css";

export const LazyNewPlacePage = lazy(
  () => import("../../pages/NewPlacePage/NewPlacePage.js"),
);

const NewPlacePage = (): React.ReactElement => {
  return <h1 className="newPlace__title">Añade un lugar</h1>;
};

export default NewPlacePage;
