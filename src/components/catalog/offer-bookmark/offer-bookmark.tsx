import {clsx} from 'clsx';

type OfferBookmarkProps = {
  isFavorite: boolean;
  block: string;
}

export default function OfferBookmark({ isFavorite, block }: OfferBookmarkProps): JSX.Element {
  return (
    <button
      className={clsx(
        `${block}__bookmark-button`,
        'button',
        isFavorite && `${block}__bookmark-button--active`
      )}
      type="button"
    >
      <svg
        className={`${block}__bookmark-icon`}
        width={block === 'offer' ? '31' : '18'}
        height={block === 'offer' ? '33' : '19'}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
