import Carrosel from '../components/molecules/Carrosel.js'
import getTitles from '../services/GetTitles.js'

export default function Series() {

    const data = getTitles(1).results
    // const series = data.filter((item) => item.titleType.isSeries && !item.titleType.isEpisode && item.primaryImage)

    return (
        <div>
            {data && (<Carrosel data={data} type='series' custom="full_size" carroselTitle="SERIES" />)}
        </div >
    );
}