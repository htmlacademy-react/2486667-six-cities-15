import {useState} from 'react';
import {clsx} from 'clsx';
import {OFFERS_SORT_OPTION_ID_DEFAULT, OFFERS_SORT_OPTIONS} from '@/utils/const';

export default function OffersSort() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeOptionId, setActiveOptionId] = useState<number>(OFFERS_SORT_OPTION_ID_DEFAULT);

  const clickCaptionHandler = (): void => {
    setIsOpen((state) => !state);
  };

  const clickOptionHandler = (id: number): void => {
    setActiveOptionId(id);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>

      <span className="places__sorting-type" tabIndex={0} onClick={clickCaptionHandler}>
        &nbsp;
        {OFFERS_SORT_OPTIONS.find((option) => option.id === activeOptionId).name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul
        className={clsx(
          'places__options',
          'places__options--custom',
          isOpen && 'places__options--opened'
        )}
      >
        {OFFERS_SORT_OPTIONS.map((option) => (
          <li
            key={option.id}
            tabIndex={0}
            className={clsx(
              'places__option',
              activeOptionId === option.id && 'places__option--active',
            )}
            onClick={() => clickOptionHandler(option.id)}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </form>
  );
}
