// Create an array of words

var words = ['baguette', 'beret', 'louvre', 'paris', 'louvre', 'love'];


// Choose word randomly
var randomnumber = Math.floor(Math.random() * words.length);
var chosenword = words[randomnumber];
console.log(chosenword);




// Create underscores based on length of word
var generateunderscore = function (chosenword) {
    var underscore = [];
    console.log(underscore)
    for (var i = 0; i < chosenword.length; i++) {
        underscore.push('_')
    }
    return underscore;
}

var placeholders = generateunderscore(chosenword);
console.log('>>>>>', placeholders)
 
var underscoreDiv = document.getElementById('underscore');

underscoreDiv.textContent = placeholders.join(' ');
console.log('>>>>>', placeholders.join(' '))
// console.log(generateunderscore());

// Get users guess
// what do I have access to? What do they contain and where do i want to go .we have placed the placeholders 
//i have access to getElementbyId, textContent, (Onkeyup ask hanna about this)

// pseudocode : 
//1)the user presses a key(a letter) 

document.onkeyup = function (event) {
    console.log(event);

    // Determines which key was pressed (I DONT UNDERSTAND THIS CODE & why we need it-convert key code to letter)

    var keycode= event.keycode;
    console.log(keycode);

    //convert this to string (also dont understand the code) Whenever user presses a key we will get the "keyWord"
    var keyWord= String.fromCharCode(event.keycode);
    console.log(keyWord);

}
    //comparing keyword to chosen word using indexOf (Need this explained too- )
    
    }


//2)the underscore will fill with the letter (if the hidden word contains the same letter(s)) -
// Check if guess is correct
// If correct push to correct array>

//3)if the letter is incorrect, that letter will appear in the incorrect array and add add 1 point to incorrect guesses

//4) IMP:the user has a limited amount of guesses can only incorrectly guess 6 times (head,body,arm,arm,leg,leg)  



