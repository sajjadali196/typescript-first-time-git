"use strict";
/*function sum(num1:number,num2:number) {
    var result:number=num1+num2;
    console.log("result is =",result);
    
}
sum(15,45)
sum(100,200)

function cToFtem(temp:number) {
    var TempF:number=temp*(9/5)+32;
    console.log("TempF=",TempF);
}
cToFtem(37);
cToFtem(40);

function percent(obtainmarks:number,totalmarks:number) {
    var percentage:number=(obtainmarks/totalmarks)*100;
    console.log(percentage);
}
percent(449,800);
percent(687,1300);*/
var sumarrow = (num1, num2) => {
    //var num1:number=11;
    //var num2:number=9;
    var rsult = num1 + num2;
    return rsult;
};
var sumrsult = sumarrow(11, 9);
sumrsult = sumrsult + 24;
console.log("sumsult is", sumrsult);
