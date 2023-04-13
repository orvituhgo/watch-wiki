import style from '../../styles/molecules/CardDetails.module.css'

export default function CardDetails({ src = 'https://via.placeholder.com/300x450/c9e8f0/f58282',
    altText, titleTitle = 'Placeholder', titleDescription = 'Loremispihuadsuhdashuiduhsahuidhuiadshuidsa',
    rating, releaseDay, releaseMonth, releaseYear }) {
    return (
        <div className={style.container}>
            <aside>
                <h2>{titleTitle}</h2>
                <img src={src} alt={altText}></img>
                <p>Rating: <span>{rating}</span></p>
            </aside>
            <article>
                <h3>Summary</h3>
                <h5>{`day: ${releaseDay} month: ${releaseMonth} year: ${releaseYear}`}</h5>
                <p>{titleDescription}</p>
            </article>
        </div>
    )
}