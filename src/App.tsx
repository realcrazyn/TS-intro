import React from 'react'
import { TodosList } from './components/TodosList'
import { UserList } from './components/UserList'

const App = () => {
  return (
    <div>
      <UserList />
      <hr />
      <TodosList />
    </div>
  )
}

export default App
