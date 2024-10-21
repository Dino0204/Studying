import styles from './ChampionList.module.scss'
import { Champion } from '../../type/type'

interface ChampionListProps {
  champion: Champion,
}

const ChampionList = ({ champion }: ChampionListProps) => {

  // 챔프 이미지 경로
  const path = `https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/${champion.id}.png`



  return (
    <div className={styles.card}>
      <img src={path} alt="image" />
      <span>{champion.name}</span>
    </div>
  )
}

export default ChampionList