//console.log(__filename);   

//console.log(__dirname); 

//console.error(new Error('Hell! This is a wrong method.'));

// const name = 'John';  
// console.warn(`Don't mess with me ${name}! Don't mess with me!`);

//clearTimeOut---------------------------//
// function printHello() {
//     console.log( "Hello, World!");
//  }
 
//  // Now call above function after 2 seconds
//  var t = setTimeout(printHello, 2000);
 
//  // Now clear the timer
//  clearTimeout(t);

// setInterval----------------------------//
// function printHello() {
//     console.log( "Hello, World!");
//  }
 
//  // Now call above function after 2 seconds
//  setInterval(printHello, 2000);

//clearInterval-----------------------------//
 function welcome () {  
    console.log("Welcome to JavaTpoint!");  
  }  
  var id1 = setTimeout(welcome,1000);  
  var id2 = setInterval(welcome,1000);  
  //clearTimeout(id1);  
  clearInterval(id2);  