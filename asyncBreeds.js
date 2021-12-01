// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, breedData) {
  fs.readFile(`../data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) {
      breedData(data);
    } else {
      breedData(data);
    }
  });

  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
  //          fs.readFile function is still running and no data has been read
};

// const printBreedDetails = (breed) => {console.log(breed)};

// // we try to get the return value
// breedDetailsFromFile('Bombay', printBreedDetails);

module.exports = breedDetailsFromFile;