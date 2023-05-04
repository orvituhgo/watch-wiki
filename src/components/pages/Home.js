import Carrosel from '../molecules/Carrosel';
import News from '../molecules/News';
import getList from '../../services/GetList';

export default function Home() {
  const data = getList();

  return (
    <div>
      <News />
      {data[0] && (
        <Carrosel data={data[0]} type="movies" carroselTitle="MOVIES" />
      )}
      {data[1] && (
        <Carrosel data={data[1]} type="series" carroselTitle="SERIES" />
      )}
      {data[2] && (
        <Carrosel data={data[2]} type="animes" carroselTitle="ANIMES" />
      )}
    </div>
  );
}
