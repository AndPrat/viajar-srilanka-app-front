export interface Place {
  id: string;
  name: string;
  subtitle: string;
  location: string;
  schedule: string;
  otherRelatedPlace: string;
  description: string;
  image: string;
  isFavorite: boolean;
}

export interface PlacesApi {
  places: PlaceApi[];
}

export interface PlaceApi extends Omit<Place, "id"> {
  _id: string;
}
