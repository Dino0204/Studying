import { USER } from '../type/type'
import styles from './styles/UserList.module.scss'

interface UserListProps {
  user: USER;
}


const UserList = ({ user }: UserListProps) => {
  return (
    <div className={styles.card}>
      <span>id :{user.id}</span>
      <span>name :{user.name}</span>
      <span>email :{user.email}</span>
      <span>website :{user.website}</span>
    </div>
  )
}

export default UserList
