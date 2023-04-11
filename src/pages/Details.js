import getTitlesId from '../services/GetTitlesId'
import styles from '../styles/pages/Details.module.css'

export default function Details() {
    const idTitle = window.location.pathname.slice(8)
    const titleInfo = []
    titleInfo.push(getTitlesId(idTitle).results)
    return (
        <ul className={styles.carrousel}>
            {
                console.log(titleInfo)
            }
        </ul>
    )
}