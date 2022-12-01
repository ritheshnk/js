var c1= prompt("Enter your name:");
var c2= prompt("Enter name of your crush:");
var n = Math.random();
n=n*100;
n=Math.floor(n);

if( n>70)
{
    alert("the love percentage of " + c1 + " and "+ c2 + " is "+ n + "% " +"Your Love bound is unbreakable");
}else if( n>50){
    alert("the love percentage of " + c1 + " and "+ c2 + " is "+ n + "%");
}else{
    alert("the love percentage of " + c1 + " and "+ c2 + " is "+ n + "% hope so ur relationship works out ");
}
