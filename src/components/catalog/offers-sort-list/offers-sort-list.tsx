import {SORT_OPTIONS, SortOption} from '@/components/catalog/offers-sort/utils/const';
import {clsx} from 'clsx';
import {useAppDispatch} from '@/hooks/store/store';
import {offersActions} from '@/store/slices/offers';

type OffersSortListProps = {
  sortOption: SortOption;
  isOn: boolean;
  off: () => void;
}

export default function OffersSortList({sortOption, isOn, off}: OffersSortListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const clickOptionHandler = (option: SortOption): void => {
    off();
    dispatch(offersActions.setSortOption(option));
  };

  return (
    <ul
      className={clsx(
        'places__options',
        'places__options--custom',
        isOn && 'places__options--opened'
      )}
    >
      {SORT_OPTIONS.map((option) => (
        <li
          key={option.id}
          tabIndex={0}
          className={clsx(
            'places__option',
            sortOption === option.id && 'places__option--active',
          )}
          onClick={() => clickOptionHandler(option.id)}
        >
          {option.name}
        </li>
      ))}
    </ul>
  );
}
