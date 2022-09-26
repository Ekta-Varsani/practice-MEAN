/* if (false) {
    console.log("I am in if block")
}

else if (true) {
    console.log("I am inside else if")
}

else {
    console.log("notice")
} */

// LCO

var who = "user"

if(who == "") {
    console.log("greading message for user")
    console.log("Allow access to view")
}
else if(who == "teacher") {
    console.log("greading message for teacher")
    console.log("Allow access to view")
}
else {
    console.log("verify email")
    console.log("send verification")
}