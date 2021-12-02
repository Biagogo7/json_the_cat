
const request = require('request');
//const fs = require('fs');

let catbreed = process.argv[2];
//console.log(catbreed);

let urll = `https://api.thecatapi.com/v1/breeds/search?q=${catbreed}`;



request(urll, function(error, response, body) {
    
  if (error) {
    console.error(`No information for ${catbreed}`);
    //console.log('the body of the url: ', body)
    //console.log('type of body: ', typeof(body));
  }

  const data = JSON.parse(body);
  //console.log(data);
  //console.log(typeof data);

  let description;
  description = data[0]["description"];
  console.log(`description of ${catbreed}:  `, description);

 
});



