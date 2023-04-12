import Carrosel from '../components/molecules/Carrosel.js'
import getTitles from '../services/GetTitles.js'

export default function Series() {

    const data = getTitles(1)
    const movies = data.filter((item) => !item.titleType.isSeries && !item.titleType.isEpisode && item.primaryImage)

    return (
        <div>
            {movies && (<Carrosel data={movies} type='movies' custom="full_size" carroselTitle="MOVIES" />)}
        </div >
    );
}