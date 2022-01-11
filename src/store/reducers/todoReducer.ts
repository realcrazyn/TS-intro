import { TodosAction, TodosActionTypes, TodosState } from '../../types/todo'

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
}

export const todoReducer = (
  state = initialState,
  action: TodosAction
): TodosState => {
  switch (action.type) {
    case TodosActionTypes.FETCH_TODOS:
      return {
        ...state,
        loading: true,
      }
    case TodosActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...action.payload],
        loading: false,
      }
    case TodosActionTypes.FETCH_TODOS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case TodosActionTypes.SET_TODO_PAGE:
      return {
        ...state,
        page: action.payload,
      }
    default:
      return state
  }
}
