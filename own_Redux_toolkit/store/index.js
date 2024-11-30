import { combineReducers, createStore } from 'redux'
import productsReducer from './Slice/productReducer'
import cartReducer, {
  addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from './Slice/cartReducer.js'
import wishListReducer, {
  addWishListItem,
  removeWishListItem,
} from './Slice/wishListReducer.js'
import { configureStore } from '@reduxjs/toolkit'


// const reducer = combineReducers({
//   products: productsReducer,
//   cartItems: cartReducer,
//   wishList: wishListReducer,
// })

// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__?.()
// )
// console.log(store.getState());

// console.log(store)

// const user =
//   [
//     {
//       name:"A",
//      age:34
//     },
//     {
//        name:"B",
//        age:34
//     },

//     {
//       name:"C",
//       age:35
//      }
//   ]


//   const newUsers=user.map((user,index)=>{
//     if(index === 1){
//       return {...user,age:45}
//     }
//     return user
//   })

function logger(store) {
  return function (next) {
    return function (action) {
      console.log('store', store);
      console.log('next', next);
      console.log('action', action);
      next(action); // Calls the next middleware or reducer
    };
  };
}

// To use this middleware, you can pass it to your Redux store like this:
// import { createStore, applyMiddleware } from 'redux';
// const store = createStore(reducer, apply







export const store= configureStore({
  reducer:{
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
    middleware:[logger]
    
  }
})



console.log(store)















// store.dispatch(addCartItem(1))
// store.dispatch(addCartItem(12))

// store.dispatch(increaseCartItemQuantity(12))

// store.dispatch(decreaseCartItemQuantity(12))
// store.dispatch(decreaseCartItemQuantity(12))

// store.dispatch(addWishListItem(18))
// store.dispatch(addWishListItem(11))

// store.dispatch(removeWishListItem(11))
// store.dispatch(removeWishListItem(18))