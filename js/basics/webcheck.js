let useremail = "  LOC123abcs"
let password = "1234"

let userchecker = function(mystring){
    if((mystring.includes(123)) && (mystring.length > 6)){
        return true
    }
    else{
        return false
    }
}

let passchecker = function(pass){
    if((pass.includes(1234)) && (pass.length > 8)){
        return true
    }
    else{
        return false
    }
}