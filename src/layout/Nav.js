import Button from '../components/atoms/GuideButton'
import styles from '../styles/molecules/Nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.menu}>
                <Button titleButton='HOME' pathing='/' />
                <Button titleButton='MOVIES' pathing='/movies' />
                <Button titleButton='SERIES' pathing='/series' />
                <Button titleButton='ANIMES' pathing='/animes' />
            </ul>
            <div className={styles.search}>
                <input type="search" className={styles.searchBar} placeholder='Digite um filme, série ou anime'></input>
                <button className={styles.searchButton}>GO</button>
            </div>
        </nav>
    )
}