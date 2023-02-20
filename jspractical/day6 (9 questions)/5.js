let country = ["Estonia", "Finland", "Sweden", "Denmark", "Norway","IceLand"];
let sum = country.reduce(function (previousValue, currentValue) {
    if(currentValue=="IceLand")
    return previousValue+" and "+currentValue+" are north European countries"
    else
    return previousValue+","+currentValue
});

console.log(sum);