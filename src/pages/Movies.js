import Carrosel from '../components/molecules/Carrosel.js'
import Api from '../utils/Api.js'

export default function Series() {

    const data = Api()
    const movies = data.filter((item) => !item.titleType.isSeries && !item.titleType.isEpisode && item.primaryImage)

    return (
        <div>
            {movies && (<Carrosel data={movies} type='movies' custom="full_size" carroselTitle="MOVIES" />)}
        </div >
    );
}