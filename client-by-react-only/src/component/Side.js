const Side = ({data, setIndex}) =>{
  return(
    <div id="side-container">
        {data.map( (ele,idx) => {
           return (<div id="side-bigWrapper"> 
              <div id="sideImg-wrapper" onClick={()=>{setIndex(idx)}}>
                <img src={ele.img}></img>
              </div>
              <div id="sideInfo-wrapper">
                <h3 id="sideInfo-title">{ele.title}</h3>
                <p id="sideInfo-rating">Rating : {ele.rating}</p>
                <p id="sideInfo-runtime">Runtime : {ele.runtime}</p>
                <div id="sideInfo-genre-box"> Genre :
                  {ele.genre.map(eleGenre => <span> {eleGenre} </span>)}
                </div>
              </div>
            </div>
           )} 
        )}
    </div>
)};

export default Side; 