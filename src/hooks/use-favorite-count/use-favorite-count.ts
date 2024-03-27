import {useActionCreators, useAppSelector} from '@/hooks/store/store';
import {favoritesActions, favoritesSelectors} from '@/store/slices/favorites';
import {useEffect} from 'react';
import {RequestStatus} from '@/utils/const';

export function useFavoriteCount() {
  const status = useAppSelector(favoritesSelectors.status);
  const count = useAppSelector(favoritesSelectors.favorites).length;
  const { fetchFavorites } = useActionCreators(favoritesActions);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      fetchFavorites();
    }
  }, [fetchFavorites, status]);

  return count;
}
