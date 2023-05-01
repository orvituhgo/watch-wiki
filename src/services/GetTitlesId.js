import { useEffect, useState, useCallback } from "react";


const apiKey = process.env.REACT_APP_MOVIE_API_KEY

export default function GetTitlesId(id) {
    const [data, setData] = useState([])
    const [removeLoader, setRemoveLoader] = useState(false)

    const options = () => {
        return {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        }
    };


    const apiConsuming = useCallback(async () => {
        const url = (id) => {
            return `https://moviesdatabase.p.rapidapi.com/titles/${id}?info=base_info`
        }
        const response = await fetch(url(id), options())
        const data = await response.json()
        setData(data)
        setRemoveLoader(true)
    }, [id])

    useEffect(() => {
        apiConsuming()
        // fetch(url, options)
        //     .then(response => response.json())
        //     .then(response => setData(response))
        //     .then(console.log(data))
        //     .catch(err => console.log(err));
    }, [apiConsuming]);

    return { removeLoader: removeLoader, response: data }
}
