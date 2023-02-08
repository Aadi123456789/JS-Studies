var a="mary"
var b="army"
let g=0;
var c=Array.from(a);
var d=Array.from(b);
if(a.length!=b.length)
console.log("false");
else
{
    for(let i=0;i<a.length;i++)
    {
        for(let j=0;j<b.length;j++)
        {
            if(c[i]==d[j])
            {
           
                c[i]=0;
                break;
            }
        }
    }for(let k=0;k<a.length;k++)
    {
        if(c[k]!=0)
        {
            console.log("false");
            g+=1;
            break;
        }
    }if(g==0) console.log("true");
}