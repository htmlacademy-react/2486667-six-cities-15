import {clsx} from 'clsx';
import {useState} from 'react';
import {postFavoriteStatus} from '@/store/thunks/offers';
import {useAppDispatch} from '@/hooks/store/store';
import {PostFavoriteStatusArgs} from '@/types/favorites';

type OfferBookmarkProps = {
  isFavorite: boolean;
  offerId: string;
  block: string;
}

export default function OfferBookmark({ isFavorite, offerId, block }: OfferBookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [currentIsFavorite, setCurrentIsFavorite] = useState<boolean>(isFavorite);

  const clickBookmarkHandle = (event: Event) => {
    event.preventDefault();
    setCurrentIsFavorite(!currentIsFavorite);

    const postFavoriteStatusArgs: PostFavoriteStatusArgs = {
      offerId,
      favStatus: +(!currentIsFavorite),
    };
    dispatch(postFavoriteStatus(postFavoriteStatusArgs));
    //dispatch(fetchFavorites());
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
