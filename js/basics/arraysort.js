const points = [40, 100, 1, 5, 25, 10];
points.sort();  //(function(a,b){return a - b});
//console.log(Math.max.apply(null,points));
const p2 = points.filter(ele => console.log(ele > 40));
//points.forEach(ele => console.log(ele));