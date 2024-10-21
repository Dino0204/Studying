import axios from "axios"
import { useEffect } from "react"

function LeagueOfLegends() {
  const Champion = () => {
    axios.get('https://ddragon.leagueoflegends.com/cdn/13.12.1/data/ko_KR')
      .then((res) => {
        console.log('롤 응답 성공:', res)
      })
  }

  useEffect(() => {
    Champion()
  })

  return (
    <div>Lol</div>
  )
}

export default LeagueOfLegends