import { combineReducers } from 'redux'
import { getAllFoodReducers } from './reducers/foodReducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducers } from './reducers/cartReducers'
import { registerUserReducer } from './reducers/userReducer'
import { loginUserReducer } from './reducers/loginReducer'
import { placeOrderReducer } from './reducers/orderReducers'




const finalReducer = combineReducers({
    getAllFoodReducers: getAllFoodReducers,
    cartReducers: cartReducers,
    registerUserReducer : registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer:placeOrderReducer
})

const composeEnhancers = composeWithDevTools({})

const fromstorage = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : []
const initialState = {
    cartReducers :{
        cartItems :fromstorage
    },
    loginUserReducer:{
        currentUser : currentUser
    }
}
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store