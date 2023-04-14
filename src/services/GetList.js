import getTitles from '../services/GetTitles'

const getList = () => {
    const data = [[], [], []]
    for (let i = 1; i <= 100; i++) {
        const movies = getTitles(i, 'movie')
        const series = getTitles(i, 'tvSeries')
        const animes = getTitles(i, 'videoGame')
        if (movies && series && animes) {
            data[0].push(...movies)

            data[1].push(...series)

            data[2].push(...animes)

        }
    }
    return data ? data : [[], [], []]
}
export default getList 