
import { createSlice } from "@reduxjs/toolkit";

import myCreateSlice from "../../Redux-toolkit";
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


const findIndexItem=(state,action)=>state.findIndex((cartItem)=>cartItem.productId === action.payload.productId)

const slice=createSlice({
  name:'cart',
  initialState:[],
  reducers:{
    addCartItem(state,action){
      const existingItemIndex=findIndexItem(state,action)
      if(existingItemIndex !== -1){
        state[existingItemIndex].quantity +=1
       
      }else{
      state.push({...action.payload,quantity:1})
      }
    },
    removeCartItem(state,action){
      const existingItemIndex=findIndexItem(state,action)
      state.splice(existingItemIndex,1)
    },
    increaseCartItemQuantity(state,action){
      const existingItemIndex=findIndexItem(state,action)
      state[existingItemIndex].quantity += 1
    },
    decreaseCartItemQuantity(state,action){
      const existingItemIndex=findIndexItem(state,action)
      state[existingItemIndex].quantity -=1
      if(state[existingItemIndex].quantity === 0)state.splice(existingItemIndex,1)
    }
  }
})

console.log(slice)




const mySlice=myCreateSlice({
  name:'cart',
  initialState:[],
  reducers:{
    addCartItem(state,action){
      const existingItemIndex=findIndexItem(state,action)
      if(existingItemIndex !== -1){
        state[existingItemIndex].quantity +=1
       
      }else{
      state.push({...action.payload,quantity:1})
      }
    },
    removeCartItem(state,action){
      const existingItemIndex=findIndexItem(state,action)
      state.splice(existingItemIndex,1)
    },
    increaseCartItemQuantity(state,action){
      const existingItemIndex=findIndexItem(state,action)
      state[existingItemIndex].quantity += 1
    },
    decreaseCartItemQuantity(state,action){
      const existingItemIndex=findIndexItem(state,action)
      state[existingItemIndex].quantity -=1
      if(state[existingItemIndex].quantity === 0)state.splice(existingItemIndex,1)
    }
  }
})
console.log(mySlice);




export const {addCartItem,removeCartItem,increaseCartItemQuantity,decreaseCartItemQuantity}=slice.actions;

export default slice.reducer;