import { useEffect, useState, useCallback } from "react";

export default function GetTitlesId(id) {
    const [data, setData] = useState([])
    const options = () => {
        return {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2e91618b67msh7bf96925786bf29p10a260jsn73b34b1f0ef8',
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
    }, [id])

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
