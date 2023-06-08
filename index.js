let btn = document.querySelector(".test_btn");
      btn.onclick = function(){
        alert("Hello I am the second test button on the page");
      }

      // variables
      var test;                  //Variable declaration
          test = 34;              // Variable Initialization
      var ay = "Ayo Ayodeji";  //both

      let myBro = "Mozillar 2022";
      const age = 13;
      let dob = "19/12/2009";

      // DATA STRUCTURES AND TYPES

      //STRINGS

      let name1 = "Mr. Brown";   //double quote
      let name2 = 'Mr. Michael';  //single quote
      let name3 = `Hello I am ${name1} - ${ 230 + 450 }`;  //batic template string
      console.log(name3);

      let accountBalance = 4633746;
      let account = "47830237"

      console.log(typeof accountBalance);
      console.log(typeof account);

      let totalBalance = accountBalance + account; //concatenation
      let totalBalance2 = accountBalance - account;

      console.log( totalBalance );
      console.log( totalBalance2 );

      console.log( name1.toUpperCase () );
      console.log( name1.toLowerCase () );

      let myStory = "   My name is Michael, I am a fullstack engineer.";

      console.log( myStory[0] ); //tells the position of a xter/letter. in this case, first letter M
      console.log( myStory.length ); //total number of xters

      let numOfWords = myStory.split(" "); //split myStory into substrings and return them as array

      console.log( numOfWords.length ); // total number of words in myStory

      console.log( myStory );
      console.log( myStory.trim() ); //removes whitespaces from the string

      let bb = myStory.concat("PHP", "JAVA","PYTHON");
      console.log(bb);

      let testStr = "HP|LENOVO|HOST|DELL|MAC";
      let testBrown = testStr.split("|");
      console.log(testBrown);

      let realDeal = testStr.repeat(3);

      console.log(realDeal);

      console.log("*".repeat(6));

      console.log( testStr.charAt(0) );

      console.log( testStr.codePointAt(0) );

      console.log( testStr.includes("D") );

      console.log(testStr.indexOf("E") );

      console.log( testStr.substring(2.10) );

      //NUMBERS

      let myNum = 45;
      let xNum = "123.78654";

      let xConverted = Number(xNum); //converting from string to number. method 1
      let xConverted2 = parseInt(xNum);  //convertimg from 1 variable to anther is called "casting" method 2
      let xConverted3 = parseFloat(xNum); //float is a decimal point value. method 3

      console.log(xNum, xConverted, xConverted2, xConverted3);

      let aprox = xConverted3.toFixed(2);
      console.log(aprox);

      let abuja = Number(xConverted3.toFixed(2));

      let xdiv = 23/0;

      console.log( xdiv ); //you can use 'typeof' to tell the data type

      //undefined

      let xtext;
      let nxtObj = null;
      let myarr = []
      console.log(xtext);

      console.log(typeof nxtObj);


      //DATA STRUCTURES
      //BASIC DATA STRUCTURE 1. ARRAY 2. OBJECT 3. MAP 4. SET

      //ARRAY
      // highest index is the length minus 1 because index number in an array starts at zero (0)
      let myArr = [
        "Mr. Brown",
        true,
        764,
        [1,4,5,8,9,0,1]
      ]

      console.log(myArr[0]);
      console.log(myArr[3][1]); //reads the number [1] inside the array i.e array insisde array

      //writing to the array
      myArr[0] = 1998;

      myArr[4] = "Mr. Brown";

      console.log( myArr );

      // push, unshift, shift, pop,
      // slice, splice, length, indexOf,

      let newPush = myArr.push(45);
      myArr.push("Huwawei","Hongkong","Togo","Abidjan");
      // Adding items at the begining of the array
      myArr.unshift(900,"Hungary","Ohio","Missisippi","Aminu Kano");
      console.log(newPush);

      // remove elements from the array
      let removedItem = myArr.pop(); // removes the last element in an array
      let shiftedItem = myArr.shift( ); //removes the first element

      console.log( removedItem, shiftedItem );

      //using the slice and splice
      let firstcopy = myArr.slice(3,9);
      let firstcopy2 = myArr.slice(3,-3);
      let firstcopy3 = myArr.slice(-3);
      
      console.log( firstcopy, firstcopy2, firstcopy3 );

      let removedItemss = myArr.splice(5,3); //remove 3 items starting from item 5
      let removedItemss2 = myArr.splice(3,3,"Abuja","Ondo",2023); //remove 3 items starting from no 3 and replace withAbuja,Ondo,2023

      // using spread operator to remove and add items
      let items2Add = ["Abuja","Ondo",2023];
      let removedItemss3 = myArr.splice(3,3,...items2Add);

      console.log( removedItemss );
      console.log( removedItemss2 );
      console.log( removedItemss3 );

      let ohioIndex = myArr.indexOf("Ohio");

      console.log( ohioIndex );

      let filteredNumbers = myArr.filter( (item) => typeof item === "number" );
      let filteredNumbers2 = myArr.filter( function(item){
        return typeof item === "number";
      });

      console.log( filteredNumbers );
      console.log( filteredNumbers2 );

      //forEach and the map (to separate each item from the array)
      myArr.forEach( (item,index) => console.log(index, item) ); //add index to show the index of each item.
      myArr.map( (item,index) => console.log(index, item) ); //this will return the function on each element and return the compiled results of all functions in an array.

      let myProductPrices = [23000,90000,65000,125000,165000];

      let sellingPriceList = myProductPrices.map( (price) => 0.2*price + price );

      console.log(sellingPriceList);
      
      console.log(sellingPriceList.sort( (a,b) => a - b) ); //sorting results in a descending order


      
      //garbage collection

      //assignment

      let nigStory = "Nigeria is officially the Federal Republic of Nigeria, is a country in West Africa. It is situated between the Sahel to the north and the Gulf of Guinea to the south in the Atlantic Ocean. It covers an area of 923,769 square kilometres (356,669 sq mi), and with a population of over 230 million, it is the most populous country in Africa, and the world's sixth-most populous country. Nigeria borders Niger in the north, Chad in the northeast, Cameroon in the east, and Benin in the west. Nigeria is a federal republic comprising 36 states and the Federal Capital Territory, where the capital, Abuja, is located. The largest city in Nigeria is Lagos, one of the largest metropolitan areas in the world and the second-largest in Africa. Nigeria has been home to several indigenous pre-colonial states and kingdoms since the second millennium BC, with the Nok civilization in the 15th century BC marking the first internal unification in the country. The modern state originated with British colonialization in the 19th century, taking its present territorial shape with the merging of the Southern Nigeria Protectorate and Northern Nigeria Protectorate in 1914 by Lord Lugard.";

      let totalWords = nigStory.split(" ");   // total words
      console.log( totalWords );

      let reverseWords = nigStory.split(" ").reverse().join(' '); // reverse words
      console.log( reverseWords );

      //palindrome
      
      function isPalindrome(str) {
        let opposite = str.split('').reverse().join('');
            return opposite === str;
      }

      
      console.log( isPalindrome('John') );

      

