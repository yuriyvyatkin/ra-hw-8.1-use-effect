import { useState } from "react";

export default function useFetch(baseUrl) {
  const [loading, setLoading] = useState(false);

  function get(url) {
    return new Promise((resolve, reject) => {
      setLoading(true);

      fetch(baseUrl + url)
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            if (!data) {
              setLoading(false);
              return reject(data);
            }
            setLoading(false);
            resolve(data);
          }, 3000);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get, loading };
}
