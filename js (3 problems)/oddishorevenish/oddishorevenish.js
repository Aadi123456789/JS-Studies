function oddishorevenish(num)

{
let sum=0;
    
while(num>0)
    
{
        
sum+=num%10;
        
sum=Math.floor(sum);
        
num/=10;
    
}
if(sum%2==0)
return "evenish"
    
else return "oddish";

}

console.log(oddishorevenish(121));

console.log(oddishorevenish(41));

console.log(oddishorevenish(501));

console.log(oddishorevenish(373));

console.log(oddishorevenish(444));