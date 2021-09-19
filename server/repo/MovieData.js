const movieData = [ ];
for(let i = 0 ; i < 10 ; i++){
  movieData.push(
    {
      id : i,
      img : `./img/${i+1}.jpg`,
      title : "movie" + (i +1),
      rating : "movie" + (i +1) + " rating",
      runtime : "movie" + (i +1) + " runtime",
      description : " Movie" + (i +1) + " description  It’s why we typically save our “mid-year” ranking for that deep breath"
    }
  )
}
module.exports =  movieData; 