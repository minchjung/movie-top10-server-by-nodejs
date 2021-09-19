import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "../actions/action";

const Side = () =>{
  const state = useSelector(state => state.reducer.movies);
  const dispatch = useDispatch();

  const handleOnClick = (idx) =>{
    dispatch(setIndex(idx))
  }
  return(
      <div id="side">
        {
          state.map((ele,idx)=> 
          <div key={ele.id} id="side-container" onClick={()=> handleOnClick(idx)}>
            <div className="side-imgBox">
              <img src={ele.img}></img>
            </div>
            <div className="side-info-wrapper">
              <h4 className="side-title">Title : {ele.title}</h4>
              <p>Rating : {ele.rating} </p>
              <p>Runtime: {ele.runtime}</p>
              <div className="side-genre">Genre:</div>
              <div className="side-genre-container" >
                  {ele.genre.map(gen => <span>{gen}</span>)}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
  
  export default Side;