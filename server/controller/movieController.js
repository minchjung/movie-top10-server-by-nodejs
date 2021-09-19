const movieData = require('../repo/MovieData');

module.exports ={
  findAll :(req, res) => {
    console.log("Its comming now !!");
    return res.json(movieData);
  },

  findOne : (req, res) => res.json(
      movieData.filter( ele => ele.id === Number(req.params.id))[0] 
    )
};