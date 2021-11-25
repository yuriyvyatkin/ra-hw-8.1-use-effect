import './DetailsList.css';
import capitalize from '../../../functions/capitalize';

export default function DetailsList(props) {
  const { details } = props;

  const items = [];

  for (const property in details) {
    items.push(`${capitalize(property)}: ${capitalize(details[property])}`);
  }

  return (
    <ul className="DetailsList">
      {items.map((item, index) => {
        return (
          <li key={index} className="DetailsList__item">
              {item}
          </li>
        );
      })}
    </ul>
  );
}
