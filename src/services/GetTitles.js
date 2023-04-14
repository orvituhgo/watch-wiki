import { useEffect, useState, useCallback } from "react";

export default function GetTitles(pages, type) {
    const [data, setData] = useState([])
    const options = () => {
        return {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2e91618b67msh7bf96925786bf29p10a260jsn73b34b1f0ef8',
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