const Current = ({data, index}) =>{
    return (
      <div id="current-container">
        <div id="current-img-wrapper">
          <img src={data[index].img}/>
        </div>
        <div id="current-info-wrapper">
          <h2 id="current-info-title">{data[index].title}</h2>
          <p id="current-info-rating">Rating : {data[index].rating}</p>
          <p id="current-info-runtime">Runtime : {data[index].runtime}</p>
          <p id="current-info-description">Description : 
          </p>
          <span id="current-info-description-span">{data[index].description}</span>
        </div>
      </div>
  )};
  
export default Current; 