import {KeyboardEvent, useEffect} from 'react';
import {useAppSelector} from '@/hooks/store/store';
import {SORT_OPTIONS} from '@/components/catalog/offers-sort/utils/const';
import {useBoolean} from '@/hooks/boolean/boolean';
import OffersSortList from '@/components/catalog/offers-sort-list/offers-sort-list';

export default function OffersSort() {
  const {isOn, off, toggle} = useBoolean<boolean>(false);
  const sortOption = useAppSelector((state) => state.sortOption);

  const clickCaptionHandler = (): void => {
    toggle();
  };

  useEffect(() => {
    if (isOn) {
      const onEscKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          off();
        }
      };
      document.addEventListener('keydown', onEscKeyDown);
      return () => {
        document.removeEventListener('keydown', onEscKeyDown);
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

      <OffersSortList sortOption={sortOption} isOn={isOn} off={off} />
    </form>
  );
}
