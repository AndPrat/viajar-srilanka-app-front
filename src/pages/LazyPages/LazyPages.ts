import { lazy } from "react";

export const LazyNewPlacePage = lazy(
  () => import("../../pages/NewPlacePage/NewPlacePage.js"),
);

export const LazyPlaceLisPage = lazy(
  () => import("../../pages/PlacesListPage/PlacesListPage.js"),
);

export const LazyHomepage = lazy(
  () => import("../../pages/Homepage/Homepage.js"),
);
