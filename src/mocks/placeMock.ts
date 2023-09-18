import { Place, PlaceApi, PlacesApi } from "../types";

export const placesMock: Place[] = [
  {
    id: "64fb41416d0350ec52f38917",
    name: "Sigiriya",
    subtitle: "Templo de la roca del león",
    location: "Matale",
    schedule: "8h a 17h",
    otherRelatedPlace: "Mirador Pidurangala",
    description:
      "La inmensa e imponente Roca del León o Lion Rock de Sigiriya, nacida de una erupción volcánica, emerge como un titán en el paisaje de la ciudad, que ineludiblemente ha ligado su historia a ella.",
    image:
      "https://www.storiesbysoumya.com/wp-content/uploads/2021/11/sigiriya-rock-fortress-768x432.jpg",
    isFavorite: false,
  },
  {
    id: "64fb42046d0350ec52f38918",
    name: "Ahas Namaye Palama",
    subtitle: "Tren de Kandy a Ella",
    location: "Ella",
    schedule: "7h a 20h",
    otherRelatedPlace: "Demodara y Ella",
    description:
      "La frondosa selva y los campos de té rodean casi engullendo el Nine Arch Bridge, creando una atmósfera de belleza cuyo cénit es cuando aparece un tren desde la boca del túnel. El puente fue una de las obras de ingeniería y arquitectura más admiradas del periodo colonial británico en la isla de Ceilán.",
    image:
      "https://www.got2globe.com/wp-content/uploads/2020/02/Composica%CC%83o-Nine-Arches-Bridge-Ella-Sri-Lanka.jpg",
    isFavorite: false,
  },
];

export const placeMock: Place = {
  id: "64fb41416d0350ec52f38917",
  name: "Sigiriya",
  subtitle: "Templo de la roca del león",
  location: "Matale",
  schedule: "8h a 17h",
  otherRelatedPlace: "Mirador Pidurangala",
  description:
    "La inmensa e imponente Roca del León o Lion Rock de Sigiriya, nacida de una erupción volcánica, emerge como un titán en el paisaje de la ciudad, que ineludiblemente ha ligado su historia a ella.",
  image:
    "https://res.cloudinary.com/ds7klnuyj/image/upload/v1694588057/Sri-Lanka-places/lugar-sigiriya.webp",
  isFavorite: false,
};

export const placeIdMock: string = "64fb41416d0350ec52f38917";
export const wrongPlaceIdMock: string = "64fb41416d0350ec52f38xxx";

export const apiPlacesMock: PlacesApi = {
  places: [
    {
      _id: placeIdMock,
      name: "Sigiriya",
      subtitle: "Templo de la roca del león",
      location: "Matale",
      schedule: "8h a 17h",
      otherRelatedPlace: "Mirador Pidurangala",
      description:
        "La inmensa e imponente Roca del León o Lion Rock de Sigiriya, nacida de una erupción volcánica, emerge como un titán en el paisaje de la ciudad, que ineludiblemente ha ligado su historia a ella.",
      image:
        "https://www.storiesbysoumya.com/wp-content/uploads/2021/11/sigiriya-rock-fortress-768x432.jpg",
      isFavorite: false,
    },
    {
      _id: "64fb42046d0350ec52f38918",
      name: "Ahas Namaye Palama",
      subtitle: "Tren de Kandy a Ella",
      location: "Ella",
      schedule: "7h a 20h",
      otherRelatedPlace: "Demodara y Ella",
      description:
        "La frondosa selva y los campos de té rodean casi engullendo el Nine Arch Bridge, creando una atmósfera de belleza cuyo cénit es cuando aparece un tren desde la boca del túnel. El puente fue una de las obras de ingeniería y arquitectura más admiradas del periodo colonial británico en la isla de Ceilán.",
      image:
        "https://www.got2globe.com/wp-content/uploads/2020/02/Composica%CC%83o-Nine-Arches-Bridge-Ella-Sri-Lanka.jpg",
      isFavorite: false,
    },
  ],
};

export const placeApiMock: Place = {
  id: "64fb41416d0350ec52f38917",
  name: "Sigiriya",
  subtitle: "Templo de la roca del león",
  location: "Matale",
  schedule: "8h a 17h",
  otherRelatedPlace: "Mirador Pidurangala",
  description:
    "La inmensa e imponente Roca del León o Lion Rock de Sigiriya, nacida de una erupción volcánica, emerge como un titán en el paisaje de la ciudad, que ineludiblemente ha ligado su historia a ella.",
  image:
    "https://www.storiesbysoumya.com/wp-content/uploads/2021/11/sigiriya-rock-fortress-768x432.jpg",
  isFavorite: false,
};

export const idPlaceMock: Place = {
  id: "64fb41416d0350ec52f38917",
  name: "Sigiriya",
  subtitle: "Templo de la roca del león",
  location: "Matale",
  schedule: "8h a 17h",
  otherRelatedPlace: "Mirador Pidurangala",
  description:
    "La inmensa e imponente Roca del León o Lion Rock de Sigiriya, nacida de una erupción volcánica, emerge como un titán en el paisaje de la ciudad, que ineludiblemente ha ligado su historia a ella.",
  image:
    "https://www.storiesbysoumya.com/wp-content/uploads/2021/11/sigiriya-rock-fortress-768x432.jpg",
  isFavorite: false,
};

export const addPlaceMock: PlaceApi = {
  _id: "64fb41416d0350ec52f38917",
  name: "Sigiriya",
  subtitle: "Templo de la roca del león",
  location: "Matale",
  schedule: "8h a 17h",
  otherRelatedPlace: "Mirador Pidurangala",
  description:
    "La inmensa e imponente Roca del León o Lion Rock de Sigiriya, nacida de una erupción volcánica, emerge como un titán en el paisaje de la ciudad, que ineludiblemente ha ligado su historia a ella.",
  image:
    "https://www.storiesbysoumya.com/wp-content/uploads/2021/11/sigiriya-rock-fortress-768x432.jpg",
  isFavorite: false,
};

export const placeByIdMock = {
  _id: placeIdMock,
  name: "Sigiriya",
  subtitle: "Templo de la roca del león",
  location: "Matale",
  schedule: "8h a 17h",
  otherRelatedPlace: "Mirador Pidurangala",
  description:
    "La inmensa e imponente Roca del León o Lion Rock de Sigiriya, nacida de una erupción volcánica, emerge como un titán en el paisaje de la ciudad, que ineludiblemente ha ligado su historia a ella.",
  image:
    "https://www.storiesbysoumya.com/wp-content/uploads/2021/11/sigiriya-rock-fortress-768x432.jpg",
  isFavorite: false,
};

export const idPlaceMockApi: PlaceApi = {
  _id: "64fb41416d0350ec52f38917",
  name: "Sigiriya",
  subtitle: "Templo de la roca del león",
  location: "Matale",
  schedule: "8h a 17h",
  otherRelatedPlace: "Mirador Pidurangala",
  description:
    "La inmensa e imponente Roca del León o Lion Rock de Sigiriya, nacida de una erupción volcánica, emerge como un titán en el paisaje de la ciudad, que ineludiblemente ha ligado su historia a ella.",
  image:
    "https://www.storiesbysoumya.com/wp-content/uploads/2021/11/sigiriya-rock-fortress-768x432.jpg",
  isFavorite: false,
};
