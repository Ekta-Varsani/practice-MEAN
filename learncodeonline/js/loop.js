// var emp=["Sonoo","Vimal","Ratan"];  
// for (i=0;i<emp.length;i++){  
// console.log(emp[2]);  
// }  

const person = {fname:"John", lname:"Doe", age:25};
for(let x in person){
    //console.log(x);
}

const numbers = [45, 4, 9, 16, 25];
//for(let x in numbers){
   // console.log(numbers[x]);
//}
//numbers.forEach(value, index, array){
   // console.log(value);
//}
for(let x of numbers){
   // console.log(x);
}

let language = "JavaScript";
for (let x of language) {
    if(x == "c")
        continue;
    console.log(x);
}