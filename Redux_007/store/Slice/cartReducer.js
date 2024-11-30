
import { createSelector, createSlice } from "@reduxjs/toolkit";

// import myCreateSlice from "../../Redux-toolkit";
// import produce from "immer";
// // Action Types
// export const CART_ADD_ITEM = 'cart/addItem'
// export const CART_REMOVE_ITEM = 'cart/removeItem'
// export const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
// export const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity'

// // Action Creators
// export function addCartItem(productData) {
//   return { type: CART_ADD_ITEM, payload: productData }
// }

// export function removeCartItem(productId) {
//   return { type: CART_ADD_ITEM, payload: { productId } }
// }

// export function decreaseCartItemQuantity(productId) {
//   return {
//     type: CART_ITEM_DECREASE_QUANTITY,
//     payload: { productId },
//   }
// }

// export function increaseCartItemQuantity(productId) {
//   return {
//     type: CART_ITEM_INCREASE_QUANTITY,
//     payload: { productId },
//   }
// }

// // Reducer
// export default function cartReducer(originalState = [], action) {
//   return produce(originalState,(state)=>{
//     const existingItemIndex=state.findIndex((cartItem)=>cartItem.productId === action.payload.productId)
//     switch(action.type){
//       case CART_ADD_ITEM:
//         if(existingItemIndex !== -1){
//           state[existingItemIndex].quantity +=1
//           break
//         }
//         state.push({...action.payload,quantity:1})
//         break
//         case CART_REMOVE_ITEM:
//           state.splice(existingItemIndex,1)
//           break
//           case CART_ITEM_INCREASE_QUANTITY:
//             state[existingItemIndex].quantity +=1
//            break
//            case CART_ITEM_DECREASE_QUANTITY:
//             state[existingItemIndex].quantity -=1
//             if(state[existingItemIndex].quantity === 0){
//               state.splice(existingItemIndex,1)
//             }
//           }
//           return state
//   })

  
// }


import { createSlice } from '@reduxjs/toolkit'

const findItemIndex = (state, action) =>
  state.findIndex((cartItem) => cartItem.productId === action.payload.productId)

const slice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  reducers: {
    fetchCartItems(state) {
      state.loading = true
    },
    fetchCartItemsError(state, action) {
      state.loading = false
      state.error = action.payload || 'Something went wrong!'
    },
    loadCartItems(state, action) {
      state.loading = false
      state.list = action.payload.products
    },
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      if (existingItemIndex !== -1) state.list[existingItemIndex].quantity += 1
      else state.list.push({ ...action.payload, quantity: 1 })
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      state.list.splice(existingItemIndex, 1)
    },
    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      state.list[existingItemIndex].quantity += 1
    },
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      state.list[existingItemIndex].quantity -= 1
      if (state.list[existingItemIndex].quantity === 0)
        state.list.splice(existingItemIndex, 1)
    },
  },
})

const getCartItems = ({ products, cartItems }) => {
  return cartItems.list
    .map(({ productId, quantity }) => {
      const cartProduct = products.list.find(
        (product) => product.id === productId
      )
      return { ...cartProduct, quantity }
    })
    .filter(({ title }) => title)
}

export const getAllCartItems = createSelector(getCartItems, (cartItems) => cartItems)
export const getCartLoadingState = (state) => state.products.loading
export const getCartError = (state) => state.products.error

export const {
  fetchCartItemsError,
  fetchCartItems,
  loadCartItems,
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = slice.actions

export default slice.reducer



// const mySlice=myCreateSlice({
//   name:'cart',
//   initialState:[],
//   reducers:{
//     addCartItem(state,action){
//       const existingItemIndex=findIndexItem(state,action)
//       if(existingItemIndex !== -1){
//         state[existingItemIndex].quantity +=1
       
//       }else{
//       state.push({...action.payload,quantity:1})
//       }
//     },
//     removeCartItem(state,action){
//       const existingItemIndex=findIndexItem(state,action)
//       state.splice(existingItemIndex,1)
//     },
//     increaseCartItemQuantity(state,action){
//       const existingItemIndex=findIndexItem(state,action)
//       state[existingItemIndex].quantity += 1
//     },
//     decreaseCartItemQuantity(state,action){
//       const existingItemIndex=findIndexItem(state,action)
//       state[existingItemIndex].quantity -=1
//       if(state[existingItemIndex].quantity === 0)state.splice(existingItemIndex,1)
//     }
//   }
// })
// console.log(mySlice);




