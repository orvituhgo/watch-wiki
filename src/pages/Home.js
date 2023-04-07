import Carrosel from '../components/molecules/Carrosel.js'
import News from '../components/molecules/News.js'
import Api from '../utils/Api.js'



export default function Home() {
    const data = Api()

    return (
        <div>
            <News />
            {data && (<Carrosel data={data} type='movies' carroselTitle='MOVIES' />)}
            {data && (<Carrosel data={data} type='series' carroselTitle='SERIES' />)}
            <Carrosel carroselTitle='ANIMES' />
        </div >
    );
}

