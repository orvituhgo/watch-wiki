import Carrosel from '../components/molecules/Carrosel.js'
import Api from '../utils/Api.js'

export default function Series() {

    const data = Api()
    const series = data.filter((item) => item.titleType.isSeries && !item.titleType.isEpisode && item.primaryImage)

    return (
        <div>
            {series && (<Carrosel data={series} type='series' custom="full_size" carroselTitle="SERIES" />)}
        </div >
    );
}