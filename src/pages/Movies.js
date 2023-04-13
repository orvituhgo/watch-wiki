import Carrosel from '../components/molecules/Carrosel.js'
import getTitles from '../services/GetTitles.js'

export default function Series() {
    const data = []
    for (let i = 1; i < 20; i++) {
        const temp = getTitles(i).results
        if (temp) {
            data.push(...temp)
        }
    }
    const movies = data ? data.filter((item) => !item.titleType.isSeries && !item.titleType.isEpisode && item.primaryImage) : []

    return (
        <div>
            {movies && (<Carrosel data={movies} type='movies' custom="full_size" carroselTitle="MOVIES" />)}
        </div >
    );
}