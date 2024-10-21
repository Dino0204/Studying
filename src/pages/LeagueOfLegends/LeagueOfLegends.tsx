import { useEffect, useState } from "react";
import axios from "axios";

import ChampionList from "../../components/ChampionList";
import { ChampionData } from "../../type/type";

function LeagueOfLegends() {
  const [champions, setChampions] = useState<ChampionData>();

  const Champions = () => {
    axios
      .get("https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR/champion.json")
      .then((res) => {
        //console.log("롤 응답 성공:", res);
        setChampions(res.data); // 전체 ChampionData 객체를 상태에 설정
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
    <div className="wrapper">
      {championsArray.map((champion) => (
        <ChampionList key={champion.id} champion={champion} />
      ))}
    </div>
  );
}

export default LeagueOfLegends;
