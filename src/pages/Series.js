import Carrosel from '../components/molecules/Carrosel.js'
import getList from '../services/GetList.js';

export default function Series() {
    const series = getList()[1]
    // for (let i = 1; i < 100; i++) {
    //     const temp = getTitles(i, 'tvSeries')
    //     if (temp) {
    //         series.push(...temp)
    //     }
    // }

    return (
        <div>
            {series && (<Carrosel data={series} type='series' custom="full_size" carroselTitle="SERIES" />)}
        </div >
    );
}