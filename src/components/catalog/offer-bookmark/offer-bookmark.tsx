import {clsx} from 'clsx';
import {useState} from 'react';
import {useActionCreators} from '@/hooks/store/store';
import {ChangeFavoriteArgs, FavoriteStatus} from '@/types/favorites';
import {favoritesActions} from '@/store/slices/favorites';
import {offersActions} from '@/store/slices/offers';
import {MouseEvent} from 'react';

type OfferBookmarkProps = {
  isFavorite: boolean;
  offerId: string;
  block: string;
}

export default function OfferBookmark({ isFavorite, offerId, block }: OfferBookmarkProps): JSX.Element {
  const [currentIsFavorite, setCurrentIsFavorite] = useState<boolean>(isFavorite);
  const { changeFavorite } = useActionCreators(favoritesActions);
  const { updateFavoriteStatus } = useActionCreators(offersActions);

  const clickBookmarkHandle = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setCurrentIsFavorite(!currentIsFavorite);

    const changeFavoriteArgs: ChangeFavoriteArgs = {
      offerId,
      status: currentIsFavorite ? FavoriteStatus.Remove : FavoriteStatus.Add,
    };
    changeFavorite(changeFavoriteArgs);
    updateFavoriteStatus(changeFavoriteArgs); // TODO сделать это в случае успеха изменения статуса
  };

  return (
    <button
      className={clsx(
        `${block}__bookmark-button`,
        'button',
        currentIsFavorite && `${block}__bookmark-button--active`
      )}
      type="button"
      onClick={clickBookmarkHandle}
    >
      <svg
        className={`${block}__bookmark-icon`}
        width={block === 'offer' ? '31' : '18'}
        height={block === 'offer' ? '33' : '19'}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {currentIsFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
