// let sayhello = function(name)
// {
//     console.log("greeting msg for user");
//     console.log(`hey ${name}`);
// }

// // sayhello("john")

// let fullname = function(fname, lname)
// {
//     console.log("welcome to lco");
//     console.log(`happy to have you, ${fname} ${lname}`);
// }

// // fullname("john", "doe")

// let myadder = function(num1, num2)
// {
//     let added = num1 + num2
//     return added
// }


// //console.log(myadder(3,5));

// let mymultiplier = function(num1, num2)
// {
//     return num1 * num2
// }

// let guestuser = function(name = "unname", course = 0)
// {
//     return "hello " + name + "count is: " + course
// }



// console.log(guestuser("john", 1));

let mymultiplier = function()
 {
     var num1=1;
     let num2=2;
     return num1 * num2
 }
//console.log(num1);
//console.log(mymultiplier());


// arrow function.....

let mul = (num1, num2) => {
    return num1 * num2;
}

//console.log(mul(4,5));



function m (arr,mul){
        const out = [];
        for(let i = 0; i < arr.length; i++){
            out.push(mul(arr[i]));
        }
        return out;
}
const re = m([1,2,3], inp => inp * 2);
//console.log(re);


function ph()
{
    console.log("hello");
}
function bsec()
{

}
setTimeout(ph, 1000)
bsec();
console.log("Me fisrt");