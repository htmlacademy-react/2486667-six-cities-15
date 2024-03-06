import {City} from '../types/city';

export enum AppRoute {
  Root = '/',
  RootParis = 'paris',
  RootCologne = 'cologne',
  RootBrussels = 'brussels',
  RootHamburg = 'hamburg',
  RootDusseldorf = 'dusseldorf',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const DEFAULT_CITY: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 12
  }
};
