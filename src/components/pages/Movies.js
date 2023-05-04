import Carrosel from '../molecules/Carrosel';
// import Loading from '../layout/Loading.js';

import getList from '../../services/GetList';

export default function Movies() {
  // const { removeLoader, response } = getList()
  // const movies = response[0]
  const movies = getList()[0];
  return (
    <div>
      {/* {!removeLoader && <Loading />} */}
      {movies && (
        <Carrosel
          data={movies}
          type="movies"
          custom="full_size"
          carroselTitle="MOVIES"
        />
      )}
    </div>
  );
}
