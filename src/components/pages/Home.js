import Carrosel from '../../components/molecules/Carrosel.js'
import News from '../../components/molecules/News.js'
import getList from '../../services/GetList.js'

export default function Home() {
    const data = getList()

    // const movies = data.filter((item) => !item.titleType.id === 'movie'&& item.primaryImage))
    // const series = data.filter((item) => item.titleType.isSeries && !item.titleType.isEpisode && item.primaryImage)

    return (
        <div>
            <News />
            {data[0] && (<Carrosel data={data[0]} type='movies' carroselTitle='MOVIES' />)}
            {data[1] && (<Carrosel data={data[1]} type='series' carroselTitle='SERIES' />)}
            {data[2] && (<Carrosel data={data[2]} type='animes' carroselTitle='ANIMES' />)}
        </div >
    );

}

