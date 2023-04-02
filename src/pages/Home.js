import Carrosel from '../components/molecules/Carrosel.js'
import News from '../components/molecules/News.js'
import '../styles/pages/Home.module.css'

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

