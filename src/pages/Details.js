import getTitlesId from '../services/GetTitlesId'
import CardDetails from '../components/molecules/CardDetails'
//import styles from '../styles/pages/Details.module.css'


export default function Details() {
    const idTitle = window.location.pathname.slice(8)
    const titleInfo = []
    const temp = getTitlesId(idTitle).results
    if (temp) {
        titleInfo.push(temp)
    }
    console.log(temp)
    console.log(titleInfo)

    const src = titleInfo ? titleInfo.map((item) => item.primaryImage.url) : null
    return (
        <>
            <CardDetails url={src} altText={'placeholder'} titleTitl={'placeholder'} titleDescription={'placeholder'} />
        </>
    )
}