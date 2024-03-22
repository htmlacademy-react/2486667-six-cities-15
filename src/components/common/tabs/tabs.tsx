import {NavLink, useLocation} from 'react-router-dom';
import {City} from '@/types/city';
import {clsx} from 'clsx';
import {useAppDispatch} from '@/hooks/store/store';
import {useEffect} from 'react';
import {AppRoute, DEFAULT_CITY} from '@/utils/const';
import {changeCity} from '@/store/actions';
import {logDOM} from "@testing-library/react";

type TabsProps = {
  cities: City[];
}

type getClassesProps = {
  isActive: boolean;
}

export default function Tabs({ cities }: TabsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();
  const getClasses = ({isActive}: getClassesProps) =>
    clsx('locations__item-link tabs__item', isActive && 'tabs__item--active');

  useEffect(() => {
    const cityId = pathname === '/' ? DEFAULT_CITY.id : pathname.slice(1);
    const city = cities.find((item) => item.id === cityId) as City;

    dispatch(changeCity(city));
  }, [pathname, cities, dispatch]);

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
