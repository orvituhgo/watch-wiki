import { useRef } from 'react';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

import style from '../../styles/molecules/Carrosel.module.css'
import Arrow from '../atoms/Arrow.js'
// import Loading from '../layout/Loading';
// import getList from '../../services/GetList';


export default function CarroselContainer({ carroselTitle, data, type, ...props },) {
    // const { removeLoader } = getList()
    const carousel = useRef(null);
    // const pathing = useLocation().pathname
    return (<section className={`${style.container}  ${style[props.custom]}`}>
        <h2 className={style.carroselTitle}>{carroselTitle}</h2>
        {!props.custom && (
            <Arrow className={style.right} right='true' elementToChange={carousel} />
        )}
        {!props.custom && (
            <Arrow className={style.left} left='true' elementToChange={carousel} />
        )}
        <div className={style.carrosel} ref={carousel}>
            {data && data.map((item) => {
                // if (type === 'movies') {
                // if (item.titleType.isSeries && !item.titleType.isEpisode && item.primaryImage) {
                return <Link
                    key={item.id}
                    to={`/details/${item.id}`}>
                    <img
                        className={style.carroselItem}
                        key={item.id}
                        src={item.primaryImage.url}
                        alt={item.titleText.text}>
                    </img>
                </Link>
                // }
                // }
            })}
        </div >
    </section >
    )
}