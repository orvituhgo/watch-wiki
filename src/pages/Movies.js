import Carrosel from '../components/molecules/Carrosel.js'
import getList from '../services/GetList.js';

export default function Movies() {
    const movies = getList()[0]
    return (
        <div>
            {movies && (<Carrosel data={movies} type='movies' custom="full_size" carroselTitle="MOVIES" />)}
        </div >
    );
}