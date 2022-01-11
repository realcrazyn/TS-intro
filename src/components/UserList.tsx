import { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypeSelector'

export const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user)

  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1> Loading....</h1>
  }

  if (error) {
    return <h6> {error}</h6>
  }

  return (
    <div>
      {users.map((user, key) => (
        <div key={key}>{user.name}</div>
      ))}
    </div>
  )
}
