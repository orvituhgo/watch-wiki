import { useParams } from 'react-router-dom';

import getTitlesId from '../../services/GetTitlesId';
import CardDetails from '../molecules/CardDetails';
import Loading from '../layout/Loading';

export default function Details() {
  const idTitle = useParams().titleId;
  const { removeLoader, response } = getTitlesId(idTitle);
  const data = response.results;
  // eslint-disable-next-line object-curly-newline, operator-linebreak
  const { primaryImage, titleText, plot, ratingsSummary, releaseDate } =
    data || {};
  return (
    <>
      {!removeLoader && <Loading />}
      {data && (
        <CardDetails
          src={
            primaryImage
              ? primaryImage.url
              : 'https://via.placeholder.com/300x450/cccccc/969696?text=Image+not+found'
          }
          altText={`View of ${titleText.text} scene`}
          titleTitle={titleText ? titleText.text : 'title not found'}
          titleDescription={
            plot ? plot.plotText.plainText : 'summary not found'
          }
          rating={
            ratingsSummary && ratingsSummary.aggregateRating
              ? ratingsSummary.aggregateRating
              : 'not rated enough'
          }
          releaseDay={releaseDate ? releaseDate.day : 'not found day'}
          releaseMonth={releaseDate ? releaseDate.month : 'not found month'}
          releaseYear={releaseDate ? releaseDate.year : 'not found year'}
        />
      )}
    </>
  );
}
