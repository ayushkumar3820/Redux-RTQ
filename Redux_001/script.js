// import {createStore} from "redux";

// const  InitialState={
//     post:0,
//     name:"ayush kumar ",
//     age:34
// }

// const INCREMENT= 'post/increment';
// const DECREMENT='post/decrement';
// const INCREMENT_BY="post/increment_by";
// const DECREMENT_BY="post/decrement_by";

// function reducer(state = InitialState,action){
//     // if(action.type === INCREMENT){
//     //     return ({...state,post:state.post+1})
//     // }
//     // else if(action.type ===dECREMENT){
//     //     return ({...state,post:state.post-1})
//     // }
//     // else if(action.type === "post/increment_by"){
//     //     console.log(payload);
//     //     return ({...state,post:state.post + action.payload})
//     // }
//     // return state;
//     // using the switch case ma 
//     switch(action.type){
//         case INCREMENT:
//             return {...state,post:state.post+1}
//             case DECREMENT:
//                 return {...state,post:state.post-1};
//                 case INCREMENT_BY:
//                     return {...state,post:state.post  +  action.payload}
//                     case DECREMENT_BY:
//                         return{...state,post:state.post + action.payload}
//                         default:
//                             return state;
//     }
// }

// const store = createStore(
//     reducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
// console.log(store.getState());

// store.subscribe(()=>{
//     console.log(store.getState())
// });

// store.dispatch({type:INCREMENT});
// store.dispatch({type:DECREMENT});
// store.dispatch({type:INCREMENT_BY,payload:10});
// store.dispatch({type:DECREMENT_BY,payload:20});
// // reduxState=reducer(reduxState,{type:"post.increment"});
// // console.log(reduxState)
// // reduxState=reducer(reduxState,{type:"post/decrement"})

// // console.log(reduxState)

// // reduxState=reducer(reduxState,{type:"Ayush",payload:20});
// // console.log(reduxState);

import { createStore } from "redux";
import { myCreateStore } from "./ownRedux";
import { productsList } from "./productList";
const postCountElement = document.querySelector('.post-count');

// const InitialState = {
//     post: 0,
//     name: "ayush kumar",
//     age: 34,
// };


// const InitialState={
//     products:[
//         {
//         id:1,
//         title:'T-shirt',
//         price:500,
//         description:'ayush',
//         rating:{count:100,value:4.3},
//         imageUrl:'kumar'
//         },
//     ],
//     cart:[{productId:1,quantity:3}],
//     wishlist:[3,2,5],
// }
const InitialState={
    products:productsList,
    cart:[],
    wishlist:[]
}
    

const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREMENT_BY = "post/increment_by";
const DECREMENT_BY = "post/decrement_by";

function reducer(state = InitialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, post: state.post + 1 };
        case DECREMENT:
            return { ...state, post: state.post - 1 };
        case INCREMENT_BY:
            return {
                ...state,
                post: state.post + (action.payload || 0), // Default to 0 if payload is undefined
            };
        case DECREMENT_BY:
            return {
                ...state,
                post: state.post - (action.payload || 0), // Subtract payload
            };
        default:
            return state;
    }
}

// Safely check for Redux DevTools extension
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const myStore=myCreateStore();
console.log(myStore);

const unsubscribe1= myStore.subscribe(()=>{
    console.log(myStore.getState())
     postCountElement.innerText=myStore.getState.post;
})
const unsubscribe2 = myStore.subscribe(() => {
    console.log('hii')
  })
  
  const unsubscribe3 = myStore.subscribe(() => {
    console.log('hello')
  })
const store = createStore(reducer, composeEnhancers);
console.log(store.getState());

// store.subscribe(() => {
//     console.log(store.getState());
// });

// Dispatch actions
postCountElement.innerText = myStore.getState().post
store.dispatch({ type: INCREMENT }); // Increment post by 1
store.dispatch({ type: DECREMENT }); // Decrement post by 1
store.dispatch({ type: INCREMENT_BY, payload: 10 }); // Increment post by 10
store.dispatch({ type: DECREMENT_BY, payload: 20 }); // Decrement post by 20


postCountElement.addEventListener('click', () => {
    myStore.dispatch({ type: INCREMENT })
  })