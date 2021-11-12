const initilState=0
 const Reducer=(state=initilState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT' :
            return state-1
        default: return state    
    }
}
export default Reducer;