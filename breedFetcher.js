
const request = require('request');
// const { calculateMac } = require('request/lib/hawk');
//const fs = require('fs');

//let catbreed = process.argv[2];
// //console.log(catbreed);


const fetchBreedDescription = function (catbreed, callback) {

  let urll = `https://api.thecatapi.com/v1/breeds/search?q=${catbreed}`;


  request(urll, function (error, response, body) {    

    if (error) {
      callback(error)
    } 
     
    const data = JSON.parse(body);
    
    let breed = data[0];

    if (breed) {
      callback(null, breed.description)
    } else {
      callback("breed not found")
    }

    
  });

  
};

module.exports = { fetchBreedDescription };