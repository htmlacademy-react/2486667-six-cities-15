import {NavLink} from 'react-router-dom';
import {City} from '@/types/city';
import {clsx} from 'clsx';

type TabsProps = {
  cities: City[];
}

type getClassesProps = {
  isActive: boolean;
}

export default function Tabs({ cities }: TabsProps): JSX.Element {
  // Активность элемента определяется по ссылке в пропсе "to"
  const getClasses = ({isActive}: getClassesProps) =>
    clsx('locations__item-link tabs__item', isActive && 'tabs__item--active');

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((item) => {
            const path: string = item.path || '';

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
