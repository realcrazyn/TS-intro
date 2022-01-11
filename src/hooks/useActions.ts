import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { rootActionCreator } from '../store/action-creators'

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(rootActionCreator, dispatch)
}
