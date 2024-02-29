import {NavLink} from 'react-router-dom';
import {CityPath} from '../../../types/city';

type TabsProps = {
  citiesWithPath: CityPath[];
}

type getClassesProps = {
  isActive: boolean;
}

export default function Tabs({ citiesWithPath }: TabsProps): JSX.Element {
  // Активность элемента определяется по ссылке в пропсе "to"
  const getClasses = ({ isActive }: getClassesProps) => isActive
    ? 'locations__item-link tabs__item tabs__item--active'
    : 'locations__item-link tabs__item';

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesWithPath.map((item) => (
            <li className="locations__item" key={item.name}>
              <NavLink
                to={item.path}
                className={getClasses}
              >
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
