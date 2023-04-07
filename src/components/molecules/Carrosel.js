import style from '../../styles/molecules/Carrosel.module.css'
import Arrow from '../atoms/Arrow.js'
import { useRef } from 'react';



export default function CarroselContainer({ carroselTitle, data, type, ...props },) {

    const carousel = useRef(null);

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
                if (type === 'movies') {
                    if (!item.titleType.isSeries && !item.titleType.isEpisode && item.primaryImage) {
                        return <img className={style.carroselItem} key={item.id} src={item.primaryImage.url} alt={item.titleText.text}></img>
                    }
                }
                if (type === 'series') {
                    if (item.titleType.isSeries && !item.titleType.isEpisode && item.primaryImage && item.primaryImage) {
                        return <img className={style.carroselItem} key={item.id} src={item.primaryImage.url} alt={item.titleText.text}></img>
                    }
                }
                return null
            })}
        </div>
    </section >)
}
