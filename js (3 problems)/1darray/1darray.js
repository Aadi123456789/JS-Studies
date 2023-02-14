function con(...arr)

{
   
return ("["+[].concat(arr).join(',')+"]");

}

console.log(con([1,2,3,4],[8,10]))
;
console.log(con([1,2,3],[4,5],[6,7]));

console.log(con([1,2],[3,4]));

console.log(con([1],[2],[3],[4],[5],[6],[7]));