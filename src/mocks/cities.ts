import {City} from '@/types/city';
import {AppRoute} from '@/utils/const';

export const CITIES: City[] = [
  {
    id: AppRoute.RootParis,
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    id: AppRoute.RootAmsterdam,
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    id: AppRoute.RootCologne,
    name: 'Cologne',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    id: AppRoute.RootBrussels,
    name: 'Brussels',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    id: AppRoute.RootHamburg,
    name: 'Hamburg',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    id: AppRoute.RootDusseldorf,
    name: 'Dusseldorf',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  }
];
