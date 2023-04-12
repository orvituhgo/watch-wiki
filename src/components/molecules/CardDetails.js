import style from '../../styles/molecules/CardDetails.module.css'

export default function CardDetails({ src = 'https://via.placeholder.com/300x450/c9e8f0/f58282', altText, titleTitle = 'Placeholder', titleDescription = 'Loremispihuadsuhdashuiduhsahuidhuiadshuidsa' }) {
    return (
        <div className={style.container}>
            <aside>
                <h2>{titleTitle}</h2>
                <img src={src} alt={altText}></img>
                <p>Rating</p>
            </aside>
            <article>
                <h3>Description</h3>
                <p>{titleDescription}</p>
            </article>
        </div>
    )
}