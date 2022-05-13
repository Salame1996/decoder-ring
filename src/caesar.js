// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //if shift isn't present, shift = 0, or > 25 or less than 25, return false
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    if (!encode) shift *= -1; 

    //make message LowerCase so all CHAR match 
    let message = input.toLowerCase();

    //place to store our final message 
    let result = ""; 

    //loop 

    for (let text = 0; text < message.length; text++) {
      let letter = message[text];

      if (letter.match(/[a-z]/)) {
      

        //shift the CHAR on every word to display message letter by letter.
        let charCode = message.charCodeAt(text) + shift;

        if (charCode > 122) {
          charCode -= 26;
        }
        if (charCode < 97) {
          charCode += 26;
        }
        let newLetter = String.fromCharCode(charCode);
        result += newLetter;
      } else {
        result += letter;
      }
    }

    return result; 
  }

  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };


// If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.

// Spaces should be maintained throughout, as should other nonalphabetic symbols.

// Capital letters can be ignored.

// If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).