import {NavLink} from 'react-router-dom';
import {AppRoute} from '../../../const';

export default function Tabs(): JSX.Element {
  const getClasses = ({ isActive }) => isActive
    ? 'locations__item-link tabs__item tabs__item--active'
    : 'locations__item-link tabs__item';

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <NavLink
              to={AppRoute.Login}
              className={getClasses}
            >
              <span>Paris</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink
              to={AppRoute.Login}
              className={getClasses}
            >
              <span>Cologne</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink
              to={AppRoute.Login}
              className={getClasses}
            >
              <span>Brussels</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink
              to={AppRoute.Root}
              className={getClasses}
            >
              <span>Amsterdam</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink
              to={AppRoute.Login}
              className={getClasses}
            >
              <span>Hamburg</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink
              to={AppRoute.Login}
              className={getClasses}
            >
              <span>Dusseldorf</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
}
