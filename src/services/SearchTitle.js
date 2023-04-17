import { useEffect, useState, useCallback } from "react";

import apiKey from './ApiKey.js'


export default function SearchTitle(title) {
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
        const url = (title) => {
            return `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}?exact=false`
        }
        const response = await fetch(url(title), options())
        const data = await response.json()
        setData(data)
        setRemoveLoader(true)
    }, [title])

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
