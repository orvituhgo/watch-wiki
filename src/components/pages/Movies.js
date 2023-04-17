import Carrosel from '../../components/molecules/Carrosel.js'
// import Loading from '../layout/Loading.js';

import getList from '../../services/GetList.js';


export default function Movies() {
    // const { removeLoader, response } = getList()
    // const movies = response[0]
    const movies = getList()[0]
    return (
        <div>
            {/* {!removeLoader && <Loading />} */}
            {movies && (<Carrosel data={movies} type='movies' custom="full_size" carroselTitle="MOVIES" />)}
        </div >
    );
}