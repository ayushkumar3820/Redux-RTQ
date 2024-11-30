// import { combineReducers, createStore } from 'redux'
import {combineReducers,createStore} from 'redux';
import productsReducer from './productReducer'
import cartReducer, {
    addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from './cartReducer'
import wishListReducer, {
    addWishListItem,
    removeWishListItem,
 
} from './wishListReducer'

// function combineReducers(reducers) {
//     const reducerKeys = Object.keys(reducers)
  
//     return function (state = {}, action) {
//       const nextState = {}
      
//       for (let i = 0; i < reducerKeys.length; i++) {
//         const key = reducerKeys[i]
//         const reducer = reducers[key]
//         const previousStateForKey = state[key]
//         const nextStateForKey = reducer(previousStateForKey, action)
//         nextState[key] = nextStateForKey
//       }
  
//       return nextState
//     }
//   }




const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)

console.log(store)
store.dispatch(addCartItem(1));
store.dispatch(addCartItem(13))
store.dispatch(increaseCartItemQuantity(12))

store.dispatch(decreaseCartItemQuantity(12))
store.dispatch(decreaseCartItemQuantity(12))

store.dispatch(addWishListItem(18))
store.dispatch(addWishListItem(11))

store.dispatch(removeWishListItem(11))
store.dispatch(removeWishListItem(18))
// console.log(store.getState())