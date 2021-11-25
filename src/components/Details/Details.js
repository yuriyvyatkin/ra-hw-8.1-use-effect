import { useState, useEffect } from 'react';
import './Details.css';
import DetailsImg from './DetailsImg/DetailsImg';
import DetailsList from './DetailsList/DetailsList';

export default function Details(props) {
  const { id, name, get } = props;
  const initialState = {
    id: '',
    name: '',
    avatar: '',
    details: {},
  };
  const [content, setContent] = useState(initialState);

  useEffect(() => {
    setContent(initialState);

    get(`${id}.json`)
      .then((data) => setContent(data))
      .catch((error) => console.error(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id={id} className="Details">
      <DetailsImg src={content.avatar} alt={name} />
      <div className="Details-body">
        <h5 className="Details-title">{name}</h5>
        <DetailsList details={content.details} />
      </div>
    </div>
  );
}
