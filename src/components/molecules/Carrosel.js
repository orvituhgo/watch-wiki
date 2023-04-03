import style from '../../styles/molecules/Carrosel.module.css'
import Arrow from '../atoms/Arrow.js'
import { useRef } from 'react';


export default function CarroselContainer({ carroselTitle, ...props },) {
    const carousel = useRef(null);


    return (
        <section className={`${style.container}  ${style[props.custom]}`}>
            <h2 className={style.carroselTitle}>{carroselTitle}</h2>
            {!props.custom && (
                <Arrow className={style.right} right='true' elementToChange={carousel} />
            )}
            {!props.custom && (
                <Arrow className={style.left} left='true' elementToChange={carousel} />
            )}
            <div className={style.carrosel} ref={carousel}>
                <img src="http://source.unsplash.com/random/600x600/?movies" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?movie" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?theater" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?cinema" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?night" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/200x280/?party" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?movies" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?movie" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?theater" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?cinema" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?night" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/200x280/?party" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?movies" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?movie" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?theater" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?cinema" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?night" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/200x280/?party" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?movies" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?movie" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?theater" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?cinema" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?night" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/200x280/?party" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?movies" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?movie" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?theater" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?cinema" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/600x600/?night" alt='foto aleatoria de movie' className={style.carroselItem} />
                <img src="http://source.unsplash.com/random/200x280/?party" alt='foto aleatoria de movie' className={style.carroselItem} />
            </div>
        </section >
    )
}