let grade = function(cm,tm)
{
    let per = (cm/tm)*100
    let g =""
    if(per >= 90)
    {
        grade = "A"
    }
    else if(per>=80)
    {
        grade ="B"
    }
    else
    {
        grade="C"
    }

    return `tour grade is ${grade} and perc is ${per}`
}

let result = grade(92,100)
console.log(result);