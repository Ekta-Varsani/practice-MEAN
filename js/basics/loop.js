//const days=["mon","tue","wed","thur","fri","sat"]
// console.log(days.length-1);

//for(let index=days.length-1; index >=0; index--)
//{
  //  const element = days[index];
    //console.log(element)

//}

const myTodos = []

myTodos.push("buy bread")
myTodos.push("record videos")
myTodos.push("go to gym")

myTodos.forEach(function(todo,i){
    console.log(`your task no ${i} is : ${todo}`);
})