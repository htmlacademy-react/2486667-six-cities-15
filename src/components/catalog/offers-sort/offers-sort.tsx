import {KeyboardEvent, useEffect} from 'react';
import {clsx} from 'clsx';
import {useAppDispatch, useAppSelector} from '@/hooks/store/store';
import {setSortOption} from '@/store/actions';
import {SORT_OPTIONS, SortOption} from '@/components/catalog/offers-sort/utils/const';
import {useBoolean} from '@/hooks/boolean/boolean';

export default function OffersSort() {
  const dispatch = useAppDispatch();
  const {isOn, off, toggle} = useBoolean<boolean>(false);
  const sortOption = useAppSelector((state) => state.sortOption);

  const clickCaptionHandler = (): void => {
    toggle();
  };

  const clickOptionHandler = (option: SortOption): void => {
    off();
    dispatch(setSortOption(option));
  };

  useEffect(() => {
    if (isOn) {
      const pressEscHandler = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
          event.preventDefault();
          off();
        }
      };
      document.addEventListener('keydown', () => pressEscHandler);
      return () => {
        document.removeEventListener('keydown', () => pressEscHandler);
      };
    }
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>

      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={clickCaptionHandler}
        style={{outline: 'none'}}
      >
        &nbsp;
        {SORT_OPTIONS.find((option) => option.id === sortOption)?.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

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
    </form>
  );
}
