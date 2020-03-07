//Basics
{
  //1 basic deklaration osv
  {
    //   var a;
    //   var b = 2;
    //   console.log(a);
    //   a = 7;
    //   B = a;
    //   console.log(a);
    //   document.write(a);
  }
  //2 string och addition
  {
    //   var a = 5;
    //   var b = 10;
    //   var c = "I am a";
    //   a = a + 1;
    //   b = b + 5;
    //   c = c + " String!";
    //   document.write(c);
  }
  //3 + - * /
  {
    //   var sum = 2 + 9;
    //   var div = 5 / 3;
    //   var prod = 6 * 5;
    //   var diff = 5 - 3;
    //   console.log(sum);
    //   console.log(div);
    //   console.log(prod);
    //   console.log(diff);
  }
  //4 operators med decimaltal
  {
    //   var minVariabel = 20;
    //   minVariabel++;
    //   console.log(minVariabel);
    //   minVariabel--;
    //   console.log(minVariabel);
    //   var decimalTal = 2.0523;
    //   var sum = minVariabel + decimalTal;
    //   console.log(sum);
    //   sum = sum * 2.63;
    //   console.log(sum);
    //   sum = minVariabel + decimalTal;
    //   sum = sum / 5.3;
    //   console.log(sum);
  }
  //5 remainders (kvar av division från heltal)
  {
    //   var remainder;
    //   remainder = 11 % 3;
    //   console.log(remainder);
    //   /*
    //   9 / 3 = 3. Alltså två kvar till 11. 11 - 9 = 2
    //   */
    //   /* Kan användas till att kolla om ett tal är ojämnt eller jämnt */
    //   var checkEven = 16;
    //   console.log(checkEven);
    //   if (checkEven % 2 == 0) {
    //     console.log(checkEven + " är ett jämnt tal");
    //   } else {
    //     console.log(checkEven + " är ett ojämnt tal");
    //   }
  }
  //6 shotcut operators = (+=, -=, *=, /=)
  {
    //   var a = 3;
    //   var b = 15;
    //   var c = 5;
    //   var d = 15;
    //   a += 12;
    //   console.log(a);
    //   b -= 9;
    //   console.log(b);
    //   c *= 3;
    //   console.log(c);
    //   d /= 3;
    //   console.log(d);
  }
}
//Intermediate
{
  //7 Strings " ", ' ', ` `
  {
    {
      //   var firstName = "Mattias";
      //   var lastName = "Andersson";
      //   var fullName = firstName + " " + lastName;
      //   console.log(fullName);
      //   var aString = "Apostrof 'i denna' text";
      //   var doubleString =
      //     'Jag har "citattecken" i denna textsträng'; /* Går även att görs så här "Jag har \"citattecken\" i denna textsträng"*/
      //   console.log(aString);
      //   console.log(doubleString);
      //   /*Kan vara användbart vid detta exempel:*/
      //   aString = '<a href="https://www.coca-cola.se/" target="_blank">Link</a>';
      //   console.log(aString);
      //   /*Även detta går att göra:*/
      //   aString = `'<a href="https://www.coca-cola.se/" target="_blank">Link</a>'`;
      //   console.log(aString);
    }
    //7.1 Fortsätta strings med backslash \
    {
      /** CODE OUTPUT
       *  \'  single quote
       *  \"  double quote
       *  \\  backslash
       *  \n  newline
       *  \r  carriage return
       *  \t  tab
       *  \b  backspace
       *  \f  formfeed
       */
      // var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
      // console.log(myStr);
    }
    //7.2 Strings med operators
    {
      // var myStr = "First text. " + "Second text";
      // console.log(myStr);
      // /* shortcut operators with string */
      // myStr = "First text. ";
      // myStr += "Second text";
      // console.log(myStr);
      // var namn = "Mattias";
      // var meningMedNamn = "Tjäna, jag heter " + namn + ". Vad händer jao?";
      // console.log(meningMedNamn);
      // var ettOrd = " där!";
      // var annanMening = "Hallå";
      // annanMening += ettOrd;
      // console.log(annanMening);
    }
    //7.3 Längd på string
    {
      // var mittNamn = "Tjetjäna";
      // var stringLangd;
      // stringLangd = mittNamn.length;
      // console.log(stringLangd);
    }
    //7.4 hitta character i string
    {
      {
        // let mittNamn = "Tjetjäna";
        // let forstaBokstav = "";
        // forstaBokstav = mittNamn[0];
        // console.log(forstaBokstav);
      }
      /*7.4.1 experiment med loop och function*/
      {
        // function varannanBokstav(ord) {
        //   var ordLangd = ord.length;
        //   let outputOrd = "";
        //   for (i = 0; i < ordLangd; i += 2) {
        //     outputOrd += ord[i];
        //   }
        //   return outputOrd;
        // }
        // let långMening = "H e j .   J a g   H e t e r   M a t t i a s .";
        // let kortMening = varannanBokstav(långMening);
        // console.log(kortMening);
      }
      /*7.4.2 hitta sista charactern */
      {
        // let efternamn = "Andersson";
        // let sistaBokstav = efternamn[efternamn.length - 1];
        // console.log(sistaBokstav);
      }
    }
    //7.5 Skapa mening med ord i funktion
    {
      // function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
      //   var result = "";
      //   result +=
      //     "The " +
      //     myAdjective +
      //     " " +
      //     myNoun +
      //     " " +
      //     myVerb +
      //     " to the store " +
      //     myAdverb;
      //   return result;
      // }
      // console.log(wordBlanks("dog", "big", "ran", "quickly"));
    }
  }
  //8 Array
  {
    {
      /* Basics */
      // let myArray = ["ett ord", 1];
      // console.log(myArray);
      // console.log(myArray[0]);
    }
    //8.1 multidimensional array
    {
      // let myArray = [
      //   ["Mattias", 1993],
      //   ["Oscar", 1992]
      // ];
      // console.log(myArray[0][1]);
      // var logga = myArray; /* Detta exekveras tydligen efter */
      // console.log(logga);  /*tilldelningen av någon anledning */
      // console.log(myArray); /* Denna med */
      // /* Tilldela array ett annat värde vid ett ställe*/
      // myArray[0][1] = "Hallå";
      // let anotherArray = [18, 64, 99];
      // anotherArray[2] = 23;
      // console.log(anotherArray);
      /* Accessing multidimensional arrays */
      // var minArray = [
      //   [1, 2, 3],
      //   [4, 5, 3],
      //   [7, 8, 9],
      //   [[10, 11, 12], 13, 14]
      // ];
      // let hittaÅtta = minArray[2][1];
      // console.log(hittaÅtta);
      // let hittaTio = minArray[3][0][0];
      // console.log(hittaTio);
    }
    //8.2 push() Lägger till i slutet av arrayen
    {
      // let myArray = [
      //   ["Mattias", 27],
      //   ["Oscar", 28]
      // ];
      // myArray.push(["Andreas", 27]);
      // console.log(myArray);
    }
    //8.3 pop() hämtar och tar bort sista i arrayen
    {
      // let myArray = [
      //   ["Mattias", 27],
      //   ["Oscar", 28]
      // ];
      // let removedFromMyArray = myArray.pop();
      // console.log(myArray);
      // console.log(removedFromMyArray);
    }
    //8.4 shift() hämtar och tar bort första i arrayen
    {
      // let myArray = [
      //   ["john", 23],
      //   ["cat", 2]
      // ];
      // let removedFromMyArray = myArray.shift();
      // console.log(myArray);
      // console.log(removedFromMyArray);
    }
    //8.5 unshift() Lägger till i början av arrayen
    {
      // let myArray = [
      //   ["john", 23],
      //   ["cat", 2]
      // ];
      // myArray.shift(); /* Tar bort första värdet */
      // myArray.unshift(["Paul", 34]); /* Lägger till i början av arrayen */
      // console.log(myArray);
    }
    //8.6 shopping list
    {
      // let myList = [
      //   ["Flingor", 3],
      //   ["mjölk", 2],
      //   ["Bananer", 3],
      //   ["Juice", 2],
      //   ["Ägg", 12]
      // ];
      // console.log(myList);
    }
  }
  //9 Functions
  {
    //9.1 Basics
    {
      // function ourReusableFunction() {
      //   console.log("Hello world!");
      // }
      // ourReusableFunction();
      // ourReusableFunction();
      // ourReusableFunction();
    }
    //9.2 Passing values to functions
    {
      // function ourFunctionWithArgs(a, b) {
      //   console.log(a - b);
      // }
      // ourFunctionWithArgs(10, 3);
    }
    //9.3 Globala variablar
    {
      //9.3.1
      {
        // var myGlobal = 10;
        // function fun1() {
        //   oopsGlobal = 5;
        // }
        // function fun2() {
        //   var output = "";
        //   if (typeof myGlobal != "undefined") {
        //     output += "myGlobal: " + myGlobal + "\n";
        //   }
        //   if (typeof oopsGlobal != "undefined") {
        //     output += "oopsGlobal: " + oopsGlobal;
        //   }
        //   console.log(output);
        // }
        // fun1();
        // fun2();
      }
      //9.3.2 Local Scope and Functions
      {
        // function myLocalScope() {
        //   var myVar = 5;
        //   console.log(myVar);
        // }
        // myLocalScope();
        // console.log(myVar);
      }
      //9.3.3
      {
        // var outerWear = "T-Shirt";
        // function myOutfit() {
        //   var outerWear = "Sweater";
        //   return outerWear;
        // }
        // console.log(myOutfit());
        // console.log(outerWear);
      }
    }
    //9.4 return value from a function with return
    {
      // function minusSeven(num) {
      //   return num - 7;
      // }
      // console.log(minusSeven(10));
      // /** Annat sätt att skriva funktion på
      //  * nedan är lika med:
      //  *
      //  * function timesFive(num){
      //  *    return num * 5;
      //  * }
      //  *
      //  */
      // var timesFive = num => num * 5;
      // console.log(timesFive(10));
    }
    //9.5 Understanding Undefined Value returned from a Function
    {
      // var sum = 0;
      // function addFive() {
      //   sum += 5;
      // }
      // console.log(addFive()); /* Ger undefined eftersom inget return i funktionen*/
    }
    //9.6 Asigning a return value to variable
    {
      // let processed = 0;
      // let processArg = num => (num + 3) / 5;
      // processed = processArg(10);
      // console.log(processed);
    }
    //9.7 Stand in line
    {
      // function nextInLine(arr, item) {
      //   arr.push(item);
      //   return arr.shift();
      // }
      // var testArr = [1, 2, 3, 4, 5];
      // console.log("Before: " + JSON.stringify(testArr));
      // console.log(nextInLine(testArr, 6));
      // console.log("After: " + JSON.stringify(testArr));
    }
  }
  //10 Boolean values
  {
    //10.1 Basics
    {
      // let welcomeToBooleans = () => true;
      // console.log(welcomeToBooleans());
    }
  }
  //11 If statements conditional logic
  {
    //11.1 Basics
    {
      // let ourTrueOrFalse = isItTrue => {
      //   if (isItTrue) {
      //     return "It's the truth!";
      //   }
      //   return "It's false bitch!";
      // };
      // console.log(ourTrueOrFalse(false));
    }
    //11.2 comparison with the equality operator
    {
      /*11.2.1 Equality == */
      {
        // let testEqual = val => {
        //   if (val == 12) {
        //     return "Equal";
        //   }
        //   return "Not equal";
        // };
        // console.log(testEqual(12));
        // console.log(testEqual("12"));
      }
      /*11.2.2 StrictEquality === */
      {
        // let strictEqual = val => {
        //   if (val === 16) {
        //     return "Equal";
        //   }
        //   return "Not equal";
        // };
        // console.log(strictEqual(16));
        // console.log(strictEqual("16"));
      }
      /*11.2.3 Practice comparing different values */
      {
        // function compareEquality(a, b) {
        //   if (a == b) {
        //     return "Equal";
        //   }
        //   return "Not equal";
        // }
        // console.log(compareEquality(10, "10"));
      }
    }
    //11.3 comparison with the inequality operator
    {
      /*11.3.1 Inequality != */
      {
        // let testNotEqual = val => {
        //   if (val != 12) {
        //     return "Not equal";
        //   }
        //   return "Equal";
        // };
        // console.log(testNotEqual("12"));
      }
      /*11.3.2 StrictEquality !== */
      {
        // let strictNotEqual = val => {
        //   if (val !== 16) {
        //     return "Not equal";
        //   }
        //   return "Equal";
        // };
        // console.log(strictNotEqual(16));
        // console.log(strictNotEqual("16"));
      }
      /*11.2.3 Practice comparing different values */
      {
        // function compareNonEquality(a, b) {
        //   if (a != b) {
        //     return "Not equal";
        //   }
        //   return "Equal";
        // }
        // console.log(compareNonEquality(10, "10"));
      }
    }
    //11.4 comparision with the logical operators
    {
      /*11.4.1 Greater than */
      {
        // let testGreaterThan = val => {
        //   if (val > 100) {
        //     return "Greater than 100";
        //   }
        //   if (val > 10) {
        //     return "Greater than 10";
        //   }
        //   return "10 or under";
        // };
        // console.log(testGreaterThan(3));
      }
      /*11.4.2 Greater or equal */
      {
        // let testGreaterOrEqual = val => {
        //   if (val >= 100) {
        //     return "Greater or equal to 100";
        //   }
        //   if (val >= 10) {
        //     return "Greater or equal to 10";
        //   }
        //   return "9 or under";
        // };
        // console.log(testGreaterOrEqual(100));
      }
      /*11.4.3 Less than */
      {
        // let testLessThan = val => {
        //   if (val < 10) {
        //     return "Less than 10";
        //   }
        //   if (val < 100) {
        //     return "Less than 100";
        //   }
        //   return "100 or over";
        // };
        // console.log(testLessThan(10));
      }
      /*11.4.4 Less or equal */
      {
        // let testLessOrEqual = val => {
        //   if (val <= 10) {
        //     return "Less or equal to 10";
        //   }
        //   if (val <= 100) {
        //     return "Less or equal to 100";
        //   }
        //   return "Over 100";
        // };
        // console.log(testLessOrEqual(100));
      }
      /*11.4.5 Logical And operator */
      {
        // function testLogicalAnd(val) {
        //   if (val <= 50 && val >= 25) {
        //     return "Yes";
        //   }
        //   return "No";
        // }
        // console.log(testLogicalAnd(24));
      }
      /*11.4.5 Logical Or operator */
      {
        // function testLogicalOr(val) {
        //   if (val >= 50 || val <= 25) {
        //     return "Outside 25 and 50";
        //   }
        //   return "Inside 25 and 50";
        // }
        // console.log(testLogicalOr(69));
      }
    }
    //11.5 Else statements
    {
      /*11.5.1 Basics */
      {
        // let testElse = val => {
        //   let result = "";
        //   if (val > 5) {
        //     result = "Bigger than 5";
        //   } else {
        //     result = "5 or smaller";
        //   }
        //   return result;
        // };
        // console.log(testElse(6));
      }
      /*11.5.2 Else If */
      {
        // let testElseIf = val => {
        //   let result = "";
        //   if (val > 20) {
        //     result = "Greater than 20";
        //   } else if (val < 10) {
        //     result = "Less than 10";
        //   } else {
        //     result = "Between 10 and 20";
        //   }
        //   return result;
        // };
        // console.log(testElseIf(21));
      }
      /*11.5.3 Logical order in if else statements*/
      {
        /*Fel i ordningen, andra kommer aldrig gå i*/
        // let testElseIfOrder = val => {
        //   let result = "";
        //   if (val < 20) {
        //     result = "Less than 20";
        //   } else if (val < 10) {
        //     result = "Less than 10";
        //   } else {
        //     result = "Over 20";
        //   }
        //   return result;
        // };
        // console.log(testElseIfOrder(5));
      }
    }
    //11.6 GOLF coding challenge
    {
      // let names = [
      //   "Hole in one!",
      //   "Eagle",
      //   "Birdie",
      //   "Par",
      //   "Bogey",
      //   "Double Bogey",
      //   "Go Home"
      // ];
      // function golfScore(par, strokes) {
      //   if (strokes == 1) {
      //     return names[0];
      //   } else if (strokes <= par - 2) {
      //     return names[1];
      //   } else if (strokes == par - 1) {
      //     return names[2];
      //   } else if (strokes == par) {
      //     return names[3];
      //   } else if (strokes == par + 1) {
      //     return names[4];
      //   } else if (strokes == par + 2) {
      //     return names[5];
      //   } else if (strokes >= par + 3) {
      //     return names[6];
      //   }
      // }
      // console.log(golfScore(4, 4));
    }
  }
  //12 Switch statements
  {
    /*12.1 Basics */
    {
      // function caseInSwitch(val) {
      //   let answer = "";
      //   switch (val) {
      //     case 1:
      //       answer = "alpha";
      //       break;
      //     case 2:
      //       answer = "beta";
      //       break;
      //     case 3:
      //       answer = "gamma";
      //       break;
      //     case 4:
      //       answer = "delta";
      //       break;
      //   }
      //   return answer;
      // }
      // console.log(caseInSwitch(1));
    }
    /*12.2 Default option in Switch Statements */
    {
      // let switchOfStuff = val => {
      //   let answer = "";
      //   switch (val) {
      //     case "a":
      //       answer = "apple";
      //       break;
      //     case "b":
      //       answer = "bird";
      //       break;
      //     case "c":
      //       answer = "cat";
      //       break;
      //     default:
      //       answer = "stuff";
      //       break;
      //   }
      //   return answer;
      // };
      // console.log(switchOfStuff("f"));
    }
    /*12.3 Multiple Identical Options in Switch Statements */
    {
      // let sequentialSizes = val => {
      //   let answer = "";
      //   switch (val) {
      //     case 1:
      //     case 2:
      //     case 3:
      //       answer = "low";
      //       break;
      //     case 4:
      //     case 5:
      //     case 6:
      //       answer = "mid";
      //       break;
      //     case 7:
      //     case 8:
      //     case 9:
      //       answer = "High";
      //       break;
      //   }
      //   return answer;
      // };
      // console.log(sequentialSizes(5));
    }
    /*12.4 Replacing If Else chains with Switch */
    {
      // let chainToSwitch = val => {
      //   let answer = "";
      //   /* Replace this to switch*/
      //   {
      //     /*
      //   if (val === "bob") {
      //     answer = "Marley";
      //   } else if (val === 42) {
      //     answer = "The answer";
      //   } else if (val === 1) {
      //     answer = "There is no #1";
      //   } else if (val === 99) {
      //     answer = "Missed by this much";
      //   } else if (val === 7) {
      //     answer = "Ate Nine";
      //   }*/
      //   }
      //   switch (val) {
      //     case "bob":
      //       answer = "Marley";
      //       break;
      //     case 42:
      //       answer = "The answer";
      //       break;
      //     case 1:
      //       answer = "There is no #1";
      //       break;
      //     case 99:
      //       answer = "Missed by this much";
      //       break;
      //     case 7:
      //       answer = "Ate Nine";
      //       break;
      //   }
      //   return answer;
      // };
      // console.log(chainToSwitch("bob"));
    }
  }
  //13 Returning different stuff
  {
    /*13.1 Returning Boolean values from functions */
    {
      // let isLess = (a, b) => {
      //   /*if (a < b) {
      //     return true;
      //   } else {
      //     return false;
      //   }*/
      //   return a < b;
      // };
      // console.log(isLess(2, 6));
    }
    /*13.2 Returning Early pattern from functions !!!Bonus math functions!!! */
    {
      // let abTest = (a, b) => {
      //   if (a < 0 || b < 0) {
      //     return undefined;
      //   }
      //   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
      // };
      // console.log(abTest(2, 1));
    }
  }
  //14 CHALLENGE counting cards
  {
    // let count = 0;
    // let cc = card => {
    //   switch (card) {
    //     case 2:
    //     case 3:
    //     case 4:
    //     case 5:
    //     case 6:
    //       count++;
    //       break;
    //     case 10:
    //     case "J":
    //     case "Q":
    //     case "K":
    //     case "A":
    //       count--;
    //       break;
    //   }
    //   let holdbet = "Hold";
    //   if (count > 0) holdbet = "Bet";
    //   return count + " " + holdbet;
    // };
    // console.log(cc(4));
    // console.log(cc(2));
    // console.log(cc(10));
    // console.log(cc("J"));
    // console.log(cc(5));
  }
  //15 Objects!
  {
    /*15.1 Basics */
    {
      // let myDog = {
      //   name: "Camper",
      //   legs: 4,
      //   tails: 1,
      //   Friends: "Me"
      // };
      // console.log(myDog.name);
    }
    /*15.2 Accessing object properties with dot notation */
    {
      // let finklader = {
      //   huvud: "Fedora",
      //   kropp: "Skjorta",
      //   ben: "Chinos",
      //   fötter: "Finskor"
      // };
      // let benValue = finklader.ben;
      // console.log(benValue);
      // let kroppValue = finklader.kropp;
      // console.log(kroppValue);
    }
    /*15.3 Accessing object properties with bracket notation */
    {
      // let testObj = {
      //   "an entree": "Hamburger",
      //   "my side": "veggies",
      //   "The drink": "water"
      // };
      // let entreeValue = testObj["an entree"];
      // let drinkValue = testObj["The drink"];
      // console.log(entreeValue);
      // console.log(drinkValue);
    }
    /*15.4 Accessing object properties with variable */
    {
      // let testObj = {
      //   12: "Mattias",
      //   16: "Oscar",
      //   19: "Andreas"
      // };
      // let playerNumber = 12;
      // console.log(testObj[playerNumber]);
    }
    /*15.5 Updating Object Properties*/
    {
      // /*15.5.1 Updating existing properties */
      // let minVolvo = {
      //   motor: "D3",
      //   drivmedel: "Diesel",
      //   sommardäck: "Pirelli"
      // };
      // minVolvo.sommardäck = "Michelin";
      // console.log(minVolvo);
      // /*15.5.2 Add new properties */
      // minVolvo.vinterdäck = "Hakkapeliitta";
      // console.log(minVolvo.vinterdäck);
      // minVolvo["antal passagerare"] = 4;
      // console.log(minVolvo);
      // /*15.5.3 Delete properties from an object */
      // delete minVolvo.sommardäck;
      // console.log(minVolvo);
    }
    /*15.6 Using Objects for Lookups*/
    {
      // let phoneticLookup = val => {
      //   let result = "";
      //   let lookup = {
      //     alpha: "Adams",
      //     bravo: "Boston",
      //     charlie: "Chicago",
      //     delta: "Denver",
      //     echo: "Easy",
      //     foxtrot: "Frank"
      //   };
      //   result = lookup[val];
      //   return result;
      // };
      // console.log(phoneticLookup("delta"));
    }
    /*15.7 Testing objects for properties*/
    {
      // let myObj = {
      //   gift: "pony",
      //   pet: "kitten",
      //   bed: "sleigh"
      // };
      // let checkObj = checkProp => {
      //   if (myObj.hasOwnProperty(checkProp)) return myObj[checkProp];
      //   return "Not found";
      // };
      // console.log(checkObj("bed"));
    }
    /*15.8 Manipulating complex objects*/
    {
      // let myMusic = [
      //   {
      //     artist: "Arch enemy",
      //     title: "The world is yours",
      //     release_year: 2017,
      //     formats: ["CD", "Spotify", "LP"],
      //     gold: false
      //   },
      //   {
      //     artist: "Megadeth",
      //     title: "Tornado Of Souls",
      //     release_year: 1990,
      //     formats: ["CD", "8T", "Youtube Music"],
      //     gold: true
      //   }
      // ];
      // let songIndex = 0;
      // let currentSong =
      //   myMusic[songIndex].title + " by " + myMusic[songIndex].artist;
      // console.log(currentSong);
    }
    /*15.9 Accessing Nested Objects*/
    {
      // let myStorage = {
      //   car: {
      //     inside: {
      //       "glove box": "maps",
      //       "passenger seat": "crumbs"
      //     },
      //     outside: {
      //       trunk: "jack"
      //     }
      //   }
      // };
      // let gloveBoxContents = myStorage.car.inside["glove box"];
      // console.log(gloveBoxContents);
    }
    /*15.10 Accessing Nested Arrays*/
    {
      // let myPlants = [
      //   {
      //     type: "flowers",
      //     list: ["rose", "tulip", "dandelion"]
      //   },
      //   {
      //     type: "trees",
      //     list: ["fir", "pine", "birch"]
      //   }
      // ];
      // let secondTree = myPlants[1].list[1];
      // console.log(secondTree);
    }
    /*15.11 Coding Challenge Record Collection */
    {
      // /* Setup */
      // let collection = {
      //   2548: {
      //     album: "Slippery When Wet",
      //     artist: "Bon Jovi",
      //     tracks: ["Let It Rock", "You Give Love a Bad Name"]
      //   },
      //   2468: {
      //     album: "1999",
      //     artist: "Prince",
      //     tracks: ["1999", "Little Red Corvette"]
      //   },
      //   1245: {
      //     artist: "Robert Palmer",
      //     tracks: []
      //   },
      //   5439: {
      //     album: "ABBA Gold"
      //   }
      // };
      // // Only change code below this line
      // function updateRecords(id, prop, value) {
      //   /*if (prop != "tracks" && value) {
      //     collection[id][prop] = value;
      //   } else if (prop == "tracks" && collection[id].tracks == undefined) {
      //     collection[id][prop] = [];
      //   }
      //   if (prop == "tracks" && value) {
      //     collection[id][prop].push(value);
      //   }
      //   if (value == "") {
      //     delete collection[id][prop];
      //   }*/
      //   if (value === "") {
      //     delete collection[id][prop];
      //   } else if (prop == "tracks") {
      //     collection[id][prop] = collection[id][prop] || [];
      //     collection[id][prop].push(value);
      //   } else {
      //     collection[id][prop] = value;
      //   }
      //   return collection;
      // }
      // /* Alter values below to test your code*/
      // let collectionCopy = JSON.parse(JSON.stringify(collection));
      // console.log(collectionCopy);
      // console.log(updateRecords(2548, "tracks", ""));
    }
  }
}
//Fun
{
  //16 Loops
  {
    /*16.1 Iterate with While Loops */
    {
      // let myArray = [];
      // let i = 0;
      // while (i < 5) {
      //   myArray.push(i);
      //   i++;
      // }
      // console.log(myArray);
    }
    /*16.2 Iterate with For Loops */
    {
      // let myArray = [];
      // for (let i = 1; i < 6; i++) {
      //   myArray.push(i);
      // }
      // console.log(myArray);
    }
    /*16.3 Iterate odd numbers with a For Loop */
    {
      // let myArray = [];
      // for (let i = 1; i < 9; i += 2) {
      //   myArray.push(i);
      // }
      // console.log(myArray);
    }
    /*16.4 Count Backwards with a For Loop */
    {
      // let myArray = [];
      // for (i = 9; i > 0; i -= 2) {
      //   myArray.push(i);
      // }
      // console.log(myArray);
    }
    /*16.5 Iterate through an Array with a For Loop */
    {
      // let myArray = [2, 3, 4, 5, 6];
      // let myTotal = 0;
      // for (let i = 0; i < myArray.length; i++) {
      //   myTotal += myArray[i];
      // }
      // console.log(myTotal);
    }
    /*16.6 Nested For Loops */
    {
      // let multiplyAll = arr => {
      //   let product = 1;
      //   for (let i = 0; i < arr.length; i++) {
      //     for (let j = 0; j < arr[i].length; j++) {
      //       product *= arr[i][j];
      //     }
      //   }
      //   return product;
      // };
      // let product = multiplyAll([
      //   [1, 2],
      //   [3, 4],
      //   [5, 6, 7]
      // ]);
      // console.log(product);
    }
    /*16.7 Iterate with Do...While Loops */
    {
      // let myArray = [];
      // let i = 10;
      // while (i < 5) {
      //   myArray.push(i);
      //   i++;
      // }
      // console.log(i, myArray);
      // do {
      //   myArray.push(i);
      //   i++;
      // } while (i < 5);
      // console.log(i, myArray);
    }
    /*16.8 Coding challenge Profile Lookup */
    {
      // /*Setup */
      // let contacts = [
      //   {
      //     firstName: "Akira",
      //     lastName: "Laine",
      //     number: "0543236543",
      //     likes: ["Pizza", "Coding", "Brownie Points"]
      //   },
      //   {
      //     firstName: "Harry",
      //     lastName: "Potter",
      //     number: "0994372684",
      //     likes: ["Hogwarts", "Magic", "Hagrid"]
      //   },
      //   {
      //     firstName: "Sherlock",
      //     lastName: "Holmes",
      //     number: "0487345643",
      //     likes: ["Intriguing Cases", "Violin"]
      //   },
      //   {
      //     firstName: "Kristian",
      //     lastName: "Vos",
      //     number: "unknown",
      //     likes: ["JavaScript", "Gaming", "Foxes"]
      //   }
      // ];
      // function lookUpProfile(name, prop) {
      //   for (let i = 0; i < contacts.length; i++) {
      //     if (contacts[i].firstName == name) {
      //       return contacts[i][prop] || "No such property";
      //     }
      //   }
      //   return "No such contact";
      // }
      // console.log(lookUpProfile("Harry", "lastName"));
    }
  }
  //17 Random generator
  {
    /*17.1 Generate Random Fractions */
    {
      // let randomFraction = () => Math.random();
      // console.log(randomFraction());
    }
    /*17.2 Generate Random Whole Numbers */
    {
      // let randomWholeNum = num => Math.floor(Math.random() * (num + 1));
      // for (i = 0; i < 10; i++) console.log(randomWholeNum(10));
    }
    /*17.3 Generate Random Whole Numbers within a Range */
    {
      // let randomRange = (myMin, myMax) =>
      //   Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
      // for (i = 0; i < 10; i++) console.log(randomRange(10, 20));
    }
  }
  //18 parseInt function
  {
    /*18.1 basics */
    {
      // let convertToInteger = str => parseInt(str);
      // console.log(convertToInteger("007"));
    }
    /*18.2 with a Radix */
    {
      // let convertToInteger = str => parseInt(str, 2);
      // console.log(convertToInteger("10011"));
    }
  }
  //19 Ternary operator (ONE LINE IF-ELSE EXPRESSION)
  {
    /*19.1 Single */
    {
      // let checkEqual = (a, b) => {
      //   return a == b ? true : false;
      // };
      // console.log(checkEqual(3, 5));
    }
    /*19.2 multiple */
    {
      // let checkSign = num => {
      //   return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
      // };
      // console.log(checkSign(0));
    }
  }
  //20 var vs let and const
  {
    /*20.1 basics */
    {
      // /*Detta ger inget felmeddelande*/
      // /*  var myName = "Mattias";
      //     var myName = "Oscar";   */
      // /*Detta ger felmeddelande */
      // /*  let myName = "Oscar";
      //     let myName = "Mattias"; */
    }
    /*20.2 "Use strict"; */
    {
      // function catTalk() {
      //   "use strict"; // Denna ger felmeddelande om man inte deklarerar en variabel
      //   catName = "oliver";
      //   quote = catName + " says Meow!";
      //   return quote;
      // }
      // console.log(catTalk());
    }
    /*20.3 Compare Scopes of the var and let keyword*/
    {
      // function checkScope() {
      //   "use strict";
      //   let i = "function scope"; //testa att byta let till var
      //   if (true) {
      //     let i = "block scope"; //testa att byta let till var
      //     console.log("Block scope i is: ", i);
      //   }
      //   console.log("Function scope i is: ", i);
      // }
      // checkScope();
    }
    /*20.4 Declare a Read-Only Variable with the const Keyword */
    {
      // let printManyTimes = str => {
      //   "use strict";
      //   const SENTENCE = str + " is cool";
      //   /*SENTENCE = str + " is amazing!";*/ //const går inte att ändra, ger felmeddelande
      //   for (let i = 0; i < str.length; i += 2) console.log(SENTENCE);
      // };
      // printManyTimes("freeCodeCamp");
    }
    /*20.5 Mutate an Array Declared with const */
    {
      // const s = [5, 7, 2];
      // let editInPlace = () => {
      //   "use strict"; //denna ger felmeddelande
      //   /*s = [2, 5, 7]; */
      //   s[0] = 2;
      //   s[1] = 5; //detta går
      //   s[2] = 7;
      // };
      // editInPlace();
      // console.log(s);
    }
    /*20.6 Prevent object mutation */
    {
      // function freezeObj() {
      //   "use strict";
      //   const MATH_CONSTANTS = {
      //     PI: 3.14
      //   };
      //   Object.freeze(MATH_CONSTANTS);
      //   try {
      //     MATH_CONSTANTS.PI = 99;
      //   } catch (ex) {
      //     console.log(ex);
      //   }
      //   return MATH_CONSTANTS.PI;
      // }
      // const PI = freezeObj();
      // console.log(PI);
    }
  }
}
//Hard
{
  //21 Arrow functions adn higher order functions
  {
    /*21.1 Use Arrow Functions to Write Concise Anonymous Functions*/ {
      // /*var magic = function() {
      //   return new Date();
      // };*/ //can be shortened to arrow function
      // /*var magic = () => {
      //   return new Date();
      // };*/ //Can be shortened even more
      // const magic = () => new Date(); //like this
    }
    /*21.2 Write Arrow Functions with Parameters */ {
      // /*Old way */
      // {
      //   /*var myContact = function(arr1, arr2) {
      //     return arr1.concat(arr2);
      //   };*/
      // }
      // /*New way */
      // {
      //   /*var myContact = (arr1, arr2) => arr1.concat(arr2);*/
      // }
      // console.log(myContact([1, 2], [3, 4, 5]));
    }
    /*21.3 Write Higher Order Arrow Functions 1 */ {
      // const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
      // const squareList = arr => {
      //   const squaredIntegers = arr
      //     .filter(num => Number.isInteger(num) && num > 0)
      //     .map(x => x * x);
      //   return squaredIntegers;
      // };
      // const squaredIntegers = squareList(realNumberArray);
      // console.log(squaredIntegers);
    }
    /*21.4 Write Higher Order Arrow Functions 2 */ {
      // const increment = (function() {
      //   return function increment(number, value = 1) {
      //     return number + value;
      //   };
      // })();
      // console.log(increment(5, 3));
      // console.log(increment(2));
    }
  }
  //22 (...) operator (rest and spread)
  {
    /*22.1 Use the Rest (...) Operator with Function Parameters */ {
      // const sum = (function() {
      //   return function sum(...args) {
      //     return args.reduce((a, b) => a + b, 0);
      //   };
      // })();
      // console.log(sum(1, 2, 3, 4, 5, 6));
    }
    /*22.2 Use the Spread (...) Operator to Evaluate Arrays in-Place */ {
      // const arr1 = ["Jan", "Feb", "Mar", "Apr", "May"];
      // let arr2;
      // (function() {
      //   arr2 = [...arr1];
      //   arr1[0] = "Potato";
      // })();
      // console.log(arr1);
      // console.log(arr2);
    }
  }
  //23 Destructuring
  {
    /*23.1 Use Destructuring Assignment to Assign Variables from Objects */ {
      // let voxel = {
      //   x: 3.6,
      //   y: 7.4,
      //   z: 6.54
      // };
      // /*Old way*/ {
      //   /*
      // let x = voxel.x;
      // let y = voxel.y;
      // let z = voxel.z;
      // console.log(x);
      // console.log(y);
      // console.log(z);
      // */
      // }
      // /* New way */ {
      //   const { x: a, y: b, z: c } = voxel;
      //   console.log(a);
      //   console.log(b);
      //   console.log(c);
      // }
      // const AVG_TEMPERATURES = {
      //   today: 23.3,
      //   tomorrow: 25
      // };
      // function getTempOfTmrw(avgTemperatures) {
      //   "use strict";
      //   const { tomorrow: tempOfTomorrow } = avgTemperatures;
      //   return tempOfTomorrow;
      // }
      // console.log(getTempOfTmrw(AVG_TEMPERATURES));
    }
    /*23.2 Destructuring Assignment with Nested Objects */ {
      // const LOCAL_FORECAST = {
      //   today: { min: 72, max: 83 },
      //   tomorrow: { min: 73.3, max: 84.6 }
      // };
      // function getMaxOfTmrw(forecast) {
      //   "use strict";
      //   const {
      //     tomorrow: { max: maxOfTomorrow }
      //   } = forecast;
      //   return maxOfTomorrow;
      // }
      // console.log(getMaxOfTmrw(LOCAL_FORECAST));
    }
    /*23.3 Use Destructuring Assignment to Assign Variables from Arrays */ {
      // const [z, x, , y] = [1, 2, 3, 4, 5, 6];
      // console.log(z, x, y);
      // let a = 8,
      //   b = 6;
      // (() => {
      //   "use strict";
      //   [a, b] = [b, a];
      // })();
      // console.log(a);
      // console.log(b);
    }
    /*23.4 Use Destructuring Assignment with the Rest Operator */ {
      // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      // function removeFirstTwo(list) {
      //   const [, , ...arr] = list;
      //   return arr;
      // }
      // const arr = removeFirstTwo(source);
      // console.log(arr);
      // console.log(source);
    }
    /*23.5 Use Destructuring Assignment to Pass an Object as a Function's Parameters */ {
      // const stats = {
      //   max: 56.78,
      //   standard_deviation: 4.34,
      //   median: 34.54,
      //   mode: 23.87,
      //   min: -0.75,
      //   average: 35.85
      // };
      // // use function argument destructuring
      // // change code below this line
      // const half = ({ max, min }) => (max + min) / 2.0;
      // // change code above this line
      // console.log(stats); // should be object
      // console.log(half(stats)); // should be 28.015
    }
  }
  //24 Template Literals
  {
    /*24.1 Create Strings using Template Literals */ {
      //       const person = {
      //         name: "Zodiac Hasbro",
      //         age: 56
      //       };
      //       const greeting = `Hello, my name is ${person.name}!
      // I am ${person.age} years old.`;
      //       console.log(greeting);
    }
    /*24.2 CODING CHALLENGE */ {
      // const result = {
      //   success: ["max-length", "no-amd", "prefer-arrow-functions"],
      //   failure: ["no-var", "var-on-top", "linebreak"],
      //   skipped: ["id-blacklist", "no-dup-keys"]
      // };
      // function makeList(arr) {
      //   "use strict";
      //   const resultDisplayArray = [];
      //   for (let i = 0; i < arr.length; i++) {
      //     resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
      //   }
      //   return resultDisplayArray;
      // }
      // const resultDisplayArray = makeList(result.success);
      // console.log(resultDisplayArray);
    }
  }
  //25 Write Concise
  {
    /*25.1 Write Concise Object Literal Declarations Using Simple Fields */ {
      // const createPerson = (name, age, gender) => ({
      //   name,
      //   age,
      //   gender
      // });
      // console.log(createPerson("Mattias Andersson", 27, "male"));
    }
    /*25.2 Write Concise Declarative Functions */ {
      const bicycle = {
        gear: 2,
        setGear(newGear) {
          "use strict";
          this.gear = newGear;
        }
        /* //old way
        setGear: function(newGear) {
          "use strict";
          this.gear = newGear;
        }*/
      };

      bicycle.setGear(3);
      console.log(bicycle.gear);
    }
  }
}

/**/

//Experiment
{
  /* hitta högsta värde köp o sälj*/ {
    // function högstaVärdeEnTransaktion(priserKort) {
    //   let högstaVärdeKort = -Infinity;
    //   for (let a = 0; a < priserKort.length - 1; a++) {
    //     for (let i = a + 1; i < priserKort.length; i++) {
    //       if (priserKort[i] - priserKort[a] > högstaVärdeKort) {
    //         högstaVärdeKort = priserKort[i] - priserKort[a];
    //       }
    //     }
    //   }
    //   return högstaVärdeKort;
    // }
    // let Värden = [-5, -30, 11, 60, 50, -90, -25, -200];
    // console.log(högstaVärdeEnTransaktion(Värden));
  }

  /* Tilldela array till annan variabel (Se 22.2 för ett bättre sätt)*/ {
    // let firstArray = [4, 3, 1, 7];
    // let secondArray = [];
    // function arrayToArray(arrayen) {
    //   let arrayToReturn = [];
    //   for (let i = 0; i < arrayen.length; i++) {
    //     arrayToReturn[i] = arrayen[i];
    //   }
    //   return arrayToReturn;
    // }
    // secondArray = arrayToArray(firstArray);
    // console.log("Second array " + secondArray);
    // firstArray[2] = 19;
    // console.log("Second array after adding 19 to first array " + secondArray);
    // console.log("First array after adding 19 to first array " + firstArray);
  }
}
