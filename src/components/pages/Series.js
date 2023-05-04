import Carrosel from '../molecules/Carrosel';
// import Loading from '../layout/Loading.js';
import getList from '../../services/GetList';

export default function Series() {
  // const { removeLoader, response } = getList()
  // const series = response[1]
  const series = getList()[1];
  // for (let i = 1; i < 100; i++) {
  //     const temp = getTitles(i, 'tvSeries')
  //     if (temp) {
  //         series.push(...temp)
  //     }
  // }

  return (
    <div>
      {/* {!removeLoader && <Loading />} */}
      {series && (
        <Carrosel
          data={series}
          type="series"
          custom="full_size"
          carroselTitle="SERIES"
        />
      )}
    </div>
  );
}
