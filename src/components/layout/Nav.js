import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Loading from './Loading.js'
import searchTitle from '../../services/SearchTitle.js'
import Button from '../atoms/GuideButton'
import styles from '../../styles/layout/Nav.module.css'


export default function Nav() {
    const [search, setSearch] = useState('')
    let removeLoader = false

    const url = useLocation().pathname
    useEffect((url) => {
        setSearch('')
    }, [url])


    const { removeLoader: removeLoaderBoolean, response } = searchTitle(search)
    removeLoader = removeLoaderBoolean
    const data = response.results

    function handleChange(e) {
        const titleTyped = e.target.value
        setSearch(titleTyped.toString())
        console.log(response)
    }

    function handleClick(e) {
        const titleClicked = e.target.value
        console.log(titleClicked)
    }


    return (
        <nav className={styles.navBar}>
            <ul className={styles.menu}>
                <Button titleButton='HOME' pathing='/' />
                <Button titleButton='MOVIES' pathing='/movies' />
                <Button titleButton='SERIES' pathing='/series' />
                <Button titleButton='ANIMES' pathing='/animes' />
            </ul>
            <div className={styles.search}>
                <input onChange={handleChange} type="search" className={styles.searchBar} value={search} placeholder='Digite um filme, série ou anime'></input>
                <button onClick={handleClick} className={styles.searchButton}>GO</button>
                {search && (<ul className={styles.searchList}>
                    {!removeLoader && (<Loading custom='half_size' />)}
                    {search && (data ? data.map((item) => item.releaseDate ? <Button custom='inline' key={item.id} titleButton={`${item.titleText.text} (${item.releaseDate.year})`} pathing={`/details/${item.id}`} /> : ''
                    ) : [])}
                </ul>)}
            </div>
        </nav>
    )
}