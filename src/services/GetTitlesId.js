import { useEffect, useState, useCallback } from 'react';

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

export default function GetTitlesId(id) {
  const [data, setData] = useState([]);
  const [removeLoader, setRemoveLoader] = useState(false);

  const options = () => ({
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
  });

  const apiConsuming = useCallback(async () => {
    const url = (idUrl) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      `https://moviesdatabase.p.rapidapi.com/titles/${idUrl}?info=base_info`;
    const response = await fetch(url(id), options());
    const dataApi = await response.json();
    setData(dataApi);
    setRemoveLoader(true);
  }, [id]);

  useEffect(() => {
    apiConsuming();
    // fetch(url, options)
    //     .then(response => response.json())
    //     .then(response => setData(response))
    //     .then(console.log(data))
    //     .catch(err => console.log(err));
  }, [apiConsuming]);

  return { removeLoader, response: data };
}
