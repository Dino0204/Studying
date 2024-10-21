import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Index from './pages/Index/Index'
import LeagueOfLegends from './pages/LeagueOfLegends/LeagueOfLegends'

function App() {

  return (
    <BrowserRouter>
      <div className={styles.page}>
        <header className={styles.page_header}>
          <h2>GSM.GG</h2>
          <nav>
            <Link to='/'>Index</Link>
            {" | "}
            <Link to='/LeagueOfLegends'>LeagueOfLegends</Link>
          </nav>
        </header>
        <aside className={styles.page_sidebar}>
          <span>Aside</span>
        </aside>
        <main className={styles.page_main}>
          <Routes>
            <Route path='/' element={<Index />}></Route>
            <Route path='/LeagueOfLegends' element={<LeagueOfLegends />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
export default App
