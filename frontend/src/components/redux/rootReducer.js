import stateReducer from "./reducers";
import { combineReducers } from 'redux'

const rootReducer = combineReducers({

    state : stateReducer

}
)

export default rootReducer