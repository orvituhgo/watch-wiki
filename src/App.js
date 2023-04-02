import Logo from './components/molecules/Logo'
import Nav from './components/molecules/Nav'
import Home from './pages/Home.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Logo />
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
