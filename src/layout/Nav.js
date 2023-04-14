import Button from '../components/atoms/GuideButton'
import styles from '../styles/molecules/Nav.module.css'
import { useState } from 'react'


export default function Nav() {
    const [search, setSearch] = useState()

    function handleChange(e) {
        e.preventDefault()
        setSearch(e.target.value)
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
                <input onChange={handleChange} type="search" className={styles.searchBar} placeholder='Digite um filme, série ou anime'></input>
                <button className={styles.searchButton}>GO</button>
                {search && (<ul className={styles.searchList}>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>)}
            </div>
        </nav>
    )
}