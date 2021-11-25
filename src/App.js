import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List/List';
import Details from './components/Details/Details';
import useFetch from './functions/useFetch';

function App() {
  const [listItems, setListItems] = useState([]);
  const [info, setInfo] = useState({ id: '', name: '' })
  const { get, loading } = useFetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/');

  useEffect(() => {
    get('users.json')
      .then((data) => setListItems(data))
      .catch((error) => console.error(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleItemClick({ target }) {
    const id = target.closest('.List__item').id;

    setInfo({ id: id, name: target.textContent });
  }

  return (
    <>
      <List onItemClick={handleItemClick} loading={loading}>
        {listItems}
      </List>
      {info.id !== '' && <Details {...info} get={get} />}
    </>
  );
}

export default App;
