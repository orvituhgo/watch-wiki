import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Container from './components/layout/Container.js'
import Logo from './components/layout/Logo'
import Nav from './components/layout/Nav'
import Home from './components/pages/Home.js'
import Movies from './components/pages/Movies.js'
import Series from './components/pages/Series.js'
import Animes from './components/pages/Animes.js'
import Cadastro from './components/pages/Cadastro.js'
import Details from './components/pages/Details.js'

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
            <Route path='details/:titleId' element={<Details />}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
