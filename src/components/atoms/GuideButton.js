import styles from '../../styles/atoms/GuideButton.module.css'
import { Link } from 'react-router-dom'


export default function GuideButton({ titleButton, pathing }) {
    return (
        <>
            <li type='none' className={styles.liButton}>
                <Link to={pathing} className={styles.link}>{titleButton}</Link>
            </li>
        </>
    )
} 