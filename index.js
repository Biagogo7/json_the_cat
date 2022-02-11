// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const catbreed = process.argv[2];

fetchBreedDescription(catbreed, (error, desc) => {
    if (error) {
      console.log('Error fetch details:', error);
    } else {
      console.log(desc);
    }
});