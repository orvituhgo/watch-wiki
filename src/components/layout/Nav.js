import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'


import Loading from './Loading.js'
import searchTitle from '../../services/SearchTitle.js'
import Button from '../atoms/GuideButton'
import styles from '../../styles/layout/Nav.module.css'


export default function Nav() {
    const [search, setSearch] = useState('')
    const [hideMenu, setHideMenu] = useState(false)
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

    function handleClickMenu() {
        setHideMenu(!hideMenu)
    }

    function handleClickInlineButton() {
        setHideMenu(!hideMenu)
    }


    return (
        <nav className={styles.navBar}>
            <div className={styles.containerH}>
                <button onClick={handleClickMenu} className={`${styles.buttonMenuH} ${hideMenu ? styles.buttonMenuHClicked : ''}`}><FaBars /></button>
                {hideMenu && (<aside className={styles.asideH}>
                    <ul className={styles.menuH}>
                        <Button onClick={handleClickInlineButton} custom='inline' titleButton='HOME' pathing='/' />
                        <Button onClick={handleClickInlineButton} custom='inline' titleButton='MOVIES' pathing='/movies' />
                        <Button onClick={handleClickInlineButton} custom='inline' titleButton='SERIES' pathing='/series' />
                        <Button onClick={handleClickInlineButton} custom='inline' titleButton='ANIMES' pathing='/animes' />
                    </ul>
                </aside>)}
            </div>
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