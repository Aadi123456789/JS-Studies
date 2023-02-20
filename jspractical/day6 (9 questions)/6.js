
function frequentletter(f)
{b=[]
    for(let i=0;i<f.length;i++)
{
    b.push(f[i].charAt(0));
}
    var a='#'
g=0;

var c=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

for(let i=0;i<b.length;i++)
{
    b[i].toLowerCase();
    c[b[i].charCodeAt(0)-97]++;
    if(g<c[b[i].charCodeAt(0)-97]){
        g=c[b[i].charCodeAt(0)-97];
        a=b[i].charAt(0);
    }
    
}return a}
f=["finland","india","ireland","china","japan"]
console.log(frequentletter(f))