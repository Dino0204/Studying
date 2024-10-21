import { useEffect, useState } from "react";
import styles from './styles/LeagueOfLegends.module.scss'
import axios from "axios";

import ChampionList from "../../components/ChampionList/ChampionList";
import { ChampionData } from "../../type/type";

function LeagueOfLegends() {
  const [champions, setChampions] = useState<ChampionData>();

  const Champions = () => {
    axios
      .get("https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion.json")
      .then((res) => {
        //console.log("롤 응답 성공:", res);
        setChampions(res.data); // ChampionData 객체
      })
      .catch((error) => {
        console.log("롤 응답 실패:", error);
      });
  };

  useEffect(() => {
    Champions();
  }, []);

  // 챔피언 데이터를 배열로 변환 (값이 없을 경우 빈 배열)
  const championsArray = champions ? Object.values(champions.data) : [];

  return (
    <div className={styles.wrapper}>
      {championsArray.map((champion) => (
        <ChampionList key={champion.id} champion={champion} />
      ))}
    </div>
  );
}

export default LeagueOfLegends;
