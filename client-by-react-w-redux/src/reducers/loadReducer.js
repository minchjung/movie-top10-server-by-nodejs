import { SET_LOAD } from "../actions/action";
import { INITIAL_STATE } from "../resources/initalState";

const loadReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SET_LOAD :
      // console.log("loadReducer SET LOAD Action work from getData() now ")
      return Object.assign({},state, {
        isLoading : action.payload          
      });
    default : 
      return state;
  }
}
  
export default loadReducer;