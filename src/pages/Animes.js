import '../styles/pages/Home.module.css'
import Carrosel from '../components/molecules/Carrosel.js'
import getList from '../services/GetList'

export default function Animes() {
    const animes = getList()[2]
    // for (let i = 1; i < 100; i++) {
    //     const temp = getTitles(i, 'videoGame')
    //     if (temp) {
    //         animes.push(...temp)
    //     }
    // }

    return (
        <div>
            {animes && (<Carrosel data={animes} type='series' custom="full_size" carroselTitle="SERIES" />)}
        </div >
    );
}