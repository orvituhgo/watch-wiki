import styles from '../../styles/atoms/GuideButton.module.css'
import { Link } from 'react-router-dom'


export default function GuideButton({ titleButton, pathing, ...props }) {
    return (
        <>
            <li onClick={props.onClick} type='none' className={`${styles.liButton} ${styles[props.custom]}`}>
                <Link to={pathing} className={`${styles.link} ${styles[props.custom]}`}>{titleButton}</Link>
            </li>
        </>
    )
} 