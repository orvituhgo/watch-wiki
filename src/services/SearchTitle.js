import { useEffect, useState, useCallback } from 'react';

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

export default function SearchTitle(title) {
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
    const url = (titleA) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      `https://moviesdatabase.p.rapidapi.com/titles/search/title/${titleA}?exact=false`;
    const response = await fetch(url(title), options());
    const dataApi = await response.json();
    setData(dataApi);
    setRemoveLoader(true);
  }, [title]);

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
