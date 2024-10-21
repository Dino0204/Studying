import { BrowserRouter } from 'react-router-dom'
import styles from './App.module.scss'

import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Main from './components/Main/Main'

function App() {

  return (
    <BrowserRouter>
      <div className={styles.page}>
        <Header />
        <Aside />
        <Main />
        {/* 푸터 */}
      </div>
    </BrowserRouter>
  )
}
export default App
