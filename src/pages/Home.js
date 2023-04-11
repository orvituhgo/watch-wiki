import Carrosel from '../components/molecules/Carrosel.js'
import News from '../components/molecules/News.js'
import Api from '../services/Api.js'



export default function Home() {

    const data = []
    for (let i = 1; i <= 10; i++) {
        const temp = Api(i).results
        if (temp) {
            data.push(...temp)
        }
    }
    console.log('redenrizou')

    // const movies = data.filter((item) => !item.titleType.isSeries && !item.titleType.isEpisode && item.primaryImage))
    // const series = data.filter((item) => item.titleType.isSeries && !item.titleType.isEpisode && item.primaryImage)

    return (
        <div>
            <News />
            {data && (<Carrosel data={data} type='movies' carroselTitle='MOVIES' />)}
            {data && (<Carrosel data={data} type='series' carroselTitle='SERIES' />)}
            <Carrosel carroselTitle='ANIMES' />
        </div >
    );

}

