import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import allcompanies from './allcompanies'
import fileupload from './fileupload'

const reducer = combineReducers({allcompanies, fileupload})
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(reducer, middleware)

export default store
export {getCompanies} from './allcompanies'
export {fileupload} from './fileupload'
