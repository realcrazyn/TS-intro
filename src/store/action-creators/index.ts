import * as UserActionCreators from './user'
import * as TodosActionCreators from './todos'

export const rootActionCreator = {
  ...TodosActionCreators,
  ...UserActionCreators,
}
