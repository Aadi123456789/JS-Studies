var a="Welcome to this Javascript Guide";
 var b=a.split(" ");
 var r="";
for(let i=0;i<b.length;i++){
    let k=b[i].length;
    for(let j=k-1;j>=0;j--){
        r+=b[i].charAt(j);
    }
    r+=" ";
}
console.log(r);