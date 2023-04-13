import getTitlesId from '../services/GetTitlesId'
import CardDetails from '../components/molecules/CardDetails'
import { useParams } from 'react-router-dom'

export default function Details() {
    const idTitle = useParams().titleId
    const titleInfo = []
    const data = getTitlesId(idTitle).results
    if (data) {
        titleInfo.push(data)
    }
    const { primaryImage, titleText, plot, ratingsSummary, releaseDate } = data ? data : {}
    console.log('renderizou')
    return (
        <>
            {data && primaryImage && titleText && plot && ratingsSummary && releaseDate && (<CardDetails
                src={primaryImage.url} altText={`View of ${titleText.text} scene`}
                titleTitle={titleText.text}
                titleDescription={plot.plotText.plainText}
                rating={ratingsSummary.aggregateRating || 'not rated enough'}
                releaseDay={releaseDate.day}
                releaseMonth={releaseDate.month}
                releaseYear={releaseDate.year}
            />)}
        </>
    )
}