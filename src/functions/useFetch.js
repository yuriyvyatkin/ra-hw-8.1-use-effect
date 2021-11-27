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
              return reject(data);
            }
            resolve(data);
          }, 3000);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        });
    });
  }

  return { get, loading };
}
