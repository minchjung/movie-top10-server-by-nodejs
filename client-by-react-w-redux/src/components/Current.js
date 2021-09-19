import { useSelector } from "react-redux";

const Current = () =>{
  const state = useSelector(state => state.reducer);
  const {movies, curIndex} = state;
  const curMovie = movies[curIndex];

  return(
    <div id="current">
      <div className="current-imgBox">
        <img src={curMovie.img} ></img>
      </div>
      <div className="current-info-wrapper">
        <h3 className="current-title">{curMovie.title}</h3>
        <p>Rating : {curMovie.rating} </p>
        <p>Runtime: {curMovie.runtime} </p>
        <div className="current-description">Description: 
          <span>{curMovie.description}</span>
        </div>
      </div>
    </div>
  )
}

export default Current;