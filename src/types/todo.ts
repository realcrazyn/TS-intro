export interface TodosState {
  todos: any[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

export type TodosAction =
  | FetchTodosAction
  | FetchTodosActionSuccess
  | FetchTodosActionError
  | SetTodosPageAction

export enum TodosActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface FetchTodosAction {
  type: TodosActionTypes.FETCH_TODOS
}

interface FetchTodosActionSuccess {
  type: TodosActionTypes.FETCH_TODOS_SUCCESS
  payload: any[]
}

interface FetchTodosActionError {
  type: TodosActionTypes.FETCH_TODOS_ERROR
  payload: string
}

interface SetTodosPageAction {
  type: TodosActionTypes.SET_TODO_PAGE
  payload: number
}
