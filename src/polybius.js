// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

     //library 
    const lib1 = [
     
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];

    //letters
    const lib2 = [
      
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i/j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
   
    if (encode) {
      //create variable to store result 
      let result = ""; 
      //get message in lower case
      let message = input.toLowerCase();
      //loop
      for (let text = 0; text < message.length; text++) {
        let letter = message[text];
        if (letter.match(/[a-z]/)) {
          //if is a letter
          if (letter === "i" || letter === "j") {
            //return 42
            result += "42"; 
          } else {
            //index of letter
            let num = lib2.indexOf(letter); 
            result += lib1[num];
          }
        } else {
          //maintian space values 
          result += letter; 
        }
      }
      return result; 
    } else {
      //decoder
      //split message into array 
      let messageArr = input.split(" "); 
      let lettersArr = [];
      for (word of messageArr) {
        //new array number of paris with word of the message 
        lettersArr.push(word.match(/.{2}/g));
      }
      //check if words are even 
      let isEven = messageArr.every((word) => word.length % 2 === 0); 

      if (!isEven) {
        
        return false;
      }
      //final
      let finalResult = []; 
      for (word of lettersArr) {
        //decode the letters
        let tempArr = [];
        for (letter of word) {
          if (letter === "42") {
            //42 rule just change i/j
            tempArr.push("(i/j)"); 
          } else {
            let num = lib1.indexOf(letter);
            let something = lib2[num];
            tempArr.push(something);
          }
        }
        finalResult.push(tempArr);
      }
      let decodedArr = [];
      //for every word join letters and words 
      for (word of finalResult) {
        //join letters
        let val = word.join(""); 
        decodedArr.push(val);
      }
      //final message adding evey word and respecting the spaces 
      let final = decodedArr.join(" "); 
      return final;
    }
  }

  polybius("jiggle", true);

  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };
