let myTodos = {
    day: 'monday',
    meetings: 0,
    meetdone: 0

}

let addmeet = function(todo, meet=0){
    todo.meetings = todo.meetings + meet
}
let meetdone = function(todo, meet=0){
    todo.meetdone = todo.meetdone - meet
}
let resetday = function(todo){
    todo.meetings=0
    todo.meetdone=0
}

let getsummary = function(todo){
    let meetleft = todo.meetings - todo.meetdone
    return `you have ${meetleft} meetings today`
}

addmeet(myTodos, 4)
addmeet(myTodos,2)
meetdone(myTodos,5)
console.log(myTodos);

console.log(getsummary(myTodos));