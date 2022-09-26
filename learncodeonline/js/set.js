const letters = new Set(["a","b","c"]);
console.log(letters.size);
letters.add("d");
console.log(letters.size);

//letters.forEach( (x) => (letters[x]) )

for(let x of letters){
   // console.log(x);
}

console.log(letters.values());
