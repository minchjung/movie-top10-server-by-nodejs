import { SET_DATA, SET_INDEX } from "../actions/action";
import { INITIAL_STATE } from "../resources/initalState";


const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SET_DATA :
      // console.log("How about this reducer action SET DATA from getData() ??")
      // console.log("Its now reducer SET DATA => state??", action.payload)
      return Object.assign({},state, {
        movies : [...action.payload]
      });
    case SET_INDEX :
      return Object.assign({}, state,{
        curIndex : action.payload        
      })

    default : 
      return state;
  }
}

export default reducer;