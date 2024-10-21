import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>GSM.GG</h2>
      <nav className={styles.header_navigation}>
        <Link to='/' className={styles.header_navigation_Link}>Index</Link>
        <Link to='/LeagueOfLegends' className={styles.header_navigation_Link}>LeagueOfLegends</Link>
      </nav>
    </header>
  )
}

export default Header
