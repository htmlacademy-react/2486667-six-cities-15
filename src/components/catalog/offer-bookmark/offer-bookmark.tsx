import {clsx} from 'clsx';
import React, {useState} from 'react';
import {useActionCreators} from '@/hooks/store/store';
import {PostFavoriteStatusArgs} from '@/types/favorites';
import {offersActions} from '@/store/slices/offers';

type OfferBookmarkProps = {
  isFavorite: boolean;
  offerId: string;
  block: string;
}

export default function OfferBookmark({ isFavorite, offerId, block }: OfferBookmarkProps): JSX.Element {
  const [currentIsFavorite, setCurrentIsFavorite] = useState<boolean>(isFavorite);
  const { postFavoriteStatus } = useActionCreators(offersActions);

  const clickBookmarkHandle = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setCurrentIsFavorite(!currentIsFavorite);

    const postFavoriteStatusArgs: PostFavoriteStatusArgs = {
      offerId,
      favStatus: +(!currentIsFavorite),
    };
    postFavoriteStatus(postFavoriteStatusArgs);
    //dispatch(fetchFavorites()); //TODO исправить обновление favorites в store
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
