"use strict";
var staffnames = ["adnankhalil", "zaheer", "sajjad", "zeeshan shafi", "zeeshan ghani"];
//console.log(staffnames);
//staffnames[1]= "asif bhutta"
//console.log(staffnames);
//function pushnewiteminarry(staffname:string) {
//  staffnames[staffnames.length] = staffname
//}
//pushnewiteminarry("majid")
//pushnewiteminarry("waseem")
//console.log(staffnames);
staffnames.push('sohail');
staffnames.push('qasim');
//staffnames.pop()
//staffnames.shift()
//staffnames.unshift('naveed hussain')
staffnames.splice(4, 0, "zahid");
console.log(staffnames);
