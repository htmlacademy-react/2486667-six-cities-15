import {City} from '@/types/city';

export enum AppRoute {
  Root = '/',
  RootParis = 'paris',
  RootAmsterdam = 'amsterdam',
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
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  path: '/'
};
