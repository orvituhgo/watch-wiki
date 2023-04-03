import Carrosel from '../components/molecules/Carrosel.js'
import News from '../components/molecules/News.js'

export default function Home() {
    return (
        <div>
            <News />
            <Carrosel carroselTitle='MOVIES' />
            <Carrosel carroselTitle='SERIES' />
            <Carrosel carroselTitle='ANIMES' />
        </div >
    );
}

