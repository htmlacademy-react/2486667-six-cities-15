import {Location} from './location';

export type City = {
  name: string;
  location: Location;
}

export type CityPath = Omit<City, 'location'> & {
  path: string;
}
