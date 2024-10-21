import { useEffect, useState } from 'react'
import { USER } from '../../type/type'
import styles from './styles/Index.module.scss'
import UserList from '../../components/UserList'
import axios from 'axios'

function Index() {
  const [users, setUsers] = useState<USER[]>([])

  const User = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log('응답 성공 :', res)
        setUsers(res.data)
        //console.log('유저:', users)
      })
      .catch((error) => {
        console.log('에러 발생 :', error)
      })
  }

  useEffect(() => {
    User()
  }, [])


  return (
    <div className={styles.wrapper}>
      {users && users.map((user) => (
        <UserList key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Index
