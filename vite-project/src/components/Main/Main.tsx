import { Route, Routes } from "react-router-dom"
import styles from './Main.module.scss'

import Index from "../../pages/Index/Index"
import LeagueOfLegends from "../../pages/LeagueOfLegends/LeagueOfLegends"

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/LeagueOfLegends' element={<LeagueOfLegends />}></Route>
      </Routes>
    </main>
  )
}

export default Main
