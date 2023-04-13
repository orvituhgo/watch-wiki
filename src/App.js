import Logo from './layout/Logo'
import Nav from './layout/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './layout/Container.js'

import Home from './pages/Home.js'
import Movies from './pages/Movies.js'
import Series from './pages/Series.js'
import Animes from './pages/Animes.js'
import Cadastro from './pages/Cadastro.js'
import Details from './pages/Details.js'

function App() {
  return (
    <>
      <Router>
        <Logo />
        <Nav />
        <Container>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='movies' element={<Movies />}></Route>
            <Route path='series' element={<Series />}></Route>
            <Route path='animes' element={<Animes />}></Route>
            <Route path='cadastro' element={<Cadastro />}></Route>
            <Route path='movies/:titleId' element={<Details />}></Route>
            <Route path='series/:titleId' element={<Details />}></Route>
            <Route path='animes/:titleId' element={<Details />}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
