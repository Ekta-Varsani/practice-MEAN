// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//     displayName();
//   }
  
//   var myFunc = makeFunc();
//   myFunc();

function outer()
{
    let counter = 0;
    function abc()
    {
        counter ++;
    }
    abc();
}
outer();

  
  