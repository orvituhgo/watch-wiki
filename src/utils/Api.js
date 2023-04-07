import { useEffect, useState } from "react";

export default function ApiResponse() {
    const [data, setData] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2e91618b67msh7bf96925786bf29p10a260jsn73b34b1f0ef8',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        const url = 'https://moviesdatabase.p.rapidapi.com/titles?year=2020'

        // const apiConsuming = async () => {
        //     const response = await fetch(url, options)
        //     const data = await response.json()
        //     return data.results
        // }
        // apiConsuming().then(setData)

        fetch(url, options)
            .then(response => response.json())
            .then(response => setData(response))
            .then(console.log(data))
            .catch(err => console.log(err));
    }, [data]);

    return data
}
