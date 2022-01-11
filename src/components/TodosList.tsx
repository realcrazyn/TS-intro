import { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypeSelector'

export const TodosList: React.FC = () => {
  const { todos, error, loading, page, limit } = useTypedSelector(
    (state) => state.todo
  )

  const { fetchTodos, setTodoPage } = useActions()
  const pages = [1, 2, 3, 4, 5]
  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1> Loading....</h1>
  }

  if (error) {
    return <h6> {error}</h6>
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id}-{todo.title}
        </div>
      ))}
      <div style={{ marginTop: '40px' }}>
        {pages.map((p) => (
          <span
            style={{
              border: p === page ? '2px solid green' : '1px solid gray',
              padding: '10px',
              margin: '10px',
              cursor: 'pointer',
            }}
            onClick={() => setTodoPage(p)}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}
