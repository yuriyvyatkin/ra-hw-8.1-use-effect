import classNames from 'classnames';
import './List.css';
import Loading from './Loading/Loading';

export default function List(props) {
  const { children, onItemClick, loading } = props;

  const listClassName = classNames('List', {
    'disabled': loading,
  });

  return (
    <div className="List-container">
      {loading && <Loading />}

      <ul className={listClassName}>
        {children.map((child) => {
          return (
            <li key={child.id} id={child.id} className="List__item">
              <a
                href="#0"
                className="List-item__link"
                onClick={loading ? undefined : onItemClick}
              >
                {child.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
