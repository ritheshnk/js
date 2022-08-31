var greet=prompt("enter your name");
var first=greet.slice(0,1);
var second=greet.slice(1,20);
first=first.toUpperCase();
second=second.toLowerCase();
var third=first+second;
alert("welcome "+third);