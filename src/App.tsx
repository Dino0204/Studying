import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/Index/Index'
import LeagueOfLegends from './pages/LeagueOfLegends/LeagueOfLegends'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Index</Link>
        {" | "}
        <Link to='/LeagueOfLegends'>LeagueOfLegends</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/LeagueOfLegends' element={<LeagueOfLegends />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
