import { useEffect, useState, useCallback } from "react";
import apiKey from './ApiKey.js'

export default function GetTitles(pages, type) {
    const [data, setData] = useState([])
    const options = () => {
        return {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        }
    }

    const apiConsuming = useCallback(async () => {
        const url = (pages) => {
            return `https://moviesdatabase.p.rapidapi.com/titles?year=2021&page=${pages}`
        }
        const response = await fetch(url(pages), options())
        const data = await response.json()
        const dataFiltered = data ? data.results.filter((item) => item.titleType.id === type && item.primaryImage !== null) : []
        setData(dataFiltered)
    }, [pages, type])

    useEffect(() => {
        apiConsuming()
        // fetch(url, options)
        //     .then(response => response.json())
        //     .then(response => setData(response))
        //     .then(console.log(data))
        //     .catch(err => console.log(err));
    }, [apiConsuming]);

    return data
}

//types :
// {
//     "results": [
//       null,
//       "movie",
//       "musicVideo",
//       "podcastEpisode",
//       "podcastSeries",
//       "short",
//       "tvEpisode",
//       "tvMiniSeries",
//       "tvMovie",
//       "tvPilot",
//       "tvSeries",
//       "tvShort",
//       "tvSpecial",
//       "video",
//       "videoGame"
//     ]
//   }