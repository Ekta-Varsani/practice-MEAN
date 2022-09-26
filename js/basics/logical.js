// && - AND operator - Both sides need to be true
// || - OR - one side to be true


let isverified = false 
let isloggedin = true
let ispaymenttoken = true
let isguest = true

if (!isverified && isloggedin && ispaymenttoken){
    console.log("greeting... ")
    console.log("grant access to paid")
}
else if(isverified || isguest){
    console.log("allow free... ")
}
else{
    console.log("please contcat admin..")
}

