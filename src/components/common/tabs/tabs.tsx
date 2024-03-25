import {NavLink, useLocation} from 'react-router-dom';
import {City} from '@/types/city';
import {clsx} from 'clsx';
import {useActionCreators} from '@/hooks/store/store';
import {useEffect} from 'react';
import {DEFAULT_CITY} from '@/utils/const';
import {offersActions} from '@/store/slices/offers';

type TabsProps = {
  cities: City[];
}

type getClassesProps = {
  isActive: boolean;
}

export default function Tabs({ cities }: TabsProps): JSX.Element {
  const {setCity} = useActionCreators(offersActions);
  const {pathname} = useLocation();
  const getClasses = ({isActive}: getClassesProps) =>
    clsx('locations__item-link tabs__item', isActive && 'tabs__item--active');

  useEffect(() => {
    const cityId = pathname === '/' ? DEFAULT_CITY.id : pathname.slice(1);
    const city = cities.find((item) => item.id === cityId) as City;

    //dispatch(offersActions.setCity(city));
    setCity(city);
  }, [pathname, cities, setCity]);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((item) => {
            const path: string = item?.id === DEFAULT_CITY.id ? '/' : `/${item?.id}` || '';

            return (
              <li className="locations__item" key={item.name}>
                <NavLink
                  to={path}
                  className={getClasses}
                >
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
