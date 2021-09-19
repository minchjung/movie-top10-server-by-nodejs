export const SET_DATA = "SET_DATA";
export const SET_LOAD = "SET_LOAD";
export const SET_INDEX = "SET_INDEX";

export const getData = () => {
  return async (dispatch)=> {
    // console.log("getdata work now")
    dispatch(setLoad(true)); 
    const result = await fetch("http://localhost:3001/movies").then(res => res.json())
    dispatch( {type : SET_DATA, payload : result} ) 
    dispatch(setLoad(false));
  }
}

export const setIndex =(index) =>{
  return{
    type : SET_INDEX,
    payload : index
  }
}

export const setLoad =(bool) =>{
  // console.log(bool)
  return{
    type : SET_LOAD,
    payload : bool
  }
}

