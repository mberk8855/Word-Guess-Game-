// Create an array of words

var words = ['baguette', 'beret', 'notre dame', 'paris', 'louvre', 'eiffel tower'];


// Choose word randomly
var randomnumber = Math.floor(Math.random() * words.length);
var chosenword = words[randomnumber];
console.log(chosenword);
var underscore = [];

// Create underscores based on length of word
var generateunderscore = () => {
    for (var i = 0; i < chosenword.length; i++)
        underscore.push('_')


    return underscore;

}

console.log(generateunderscore());

// Get users guess
// Check if guess is correct
// If correct push to correct array
// If incorrect push to incorrect array

