"use strict";
var length = 20;
var width = 9;
var area = length * width;
console.log(area);
var a = 4;
var cube = a ** 3;
console.log(cube);
var num1 = 11;
var rEsult = num1 % 2;
var rEsult1 = num1 % 2;
if (rEsult == 0) {
    console.log(`'even number' ${rEsult}`);
}
else {
    console.log(`'Odd number'${rEsult1}`);
}
var num1 = 11;
var REsul = num1 > 0;
var REsul1 = num1 < 0;
var REsul2 = num1 == 0;
if (REsul) {
    console.log `Positive number`;
}
else if (REsul1) {
    console.log `negitive number`;
}
else {
    console.log `zero`;
}
var age = 17;
var voter = age >= 18;
if (voter)
    console.log `this person is eligibale for vote`;
else
    console.log `this person is not eligible for vote`;
var num2 = 10;
var num3 = 5;
var num4 = 3;
var num5 = 2;
var num6 = 4;
var anwser = ((num2 + num3) * num4 - num5) / (num6 % num4);
console.log(anwser);
