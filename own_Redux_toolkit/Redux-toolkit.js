export default function myCreateSlice(config){
    const {name,initialState,reducer}=config;
    const actions={}
    console.log(config)
    Object.keys(reducer).forEach((key)=>{
      actions[keys]=function(payload){
        return {
          type:`${name}/${key}`,
          payload,
        }
      }
    })
    function reducer(originalState= initialState,action){
      return produce(originalState,(state)=>{
        const caseReducer=reducers(action.type.split('/')[1])
        if(caseReducer){
          return caseReducer(state,action)
        }
        return state
      })
    }
    return { actions ,reducer}
  }
  